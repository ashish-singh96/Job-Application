import user from "../model/UserMode.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import cloudinary from '../Utils/cloudinary.js';
import getDataUri from "../Utils/datauri.js";

class UserController {

    static registerUser = async (req, res) => {
        try {
            const { fullName, email, role, phone, password } = req.body;

            if (!fullName || !email || !role || !phone || !password) {
                return res.status(400).json({ message: "Please fill all details." });
            }

            const userExists = await user.findOne({ email });

            if (userExists) {
                return res.status(409).json({ message: "User already exists with this email." });
            }

            const hashPassword = await bcrypt.hash(password, 10);

            const newUser = new user({
                fullName,
                email,
                phone,
                password: hashPassword,
                role,
            });

            await newUser.save();
            res.status(201).json({ message: "Account created successfully." });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error!" });
        }
    }

    static login = async (req, res) => {
        try {
            const { email, password, role } = req.body;

            if (!email || !password || !role) {
                return res.status(400).json({ message: "Please fill all details." });
            }

            const User = await user.findOne({ email });
            if (!User) {
                return res.status(401).json({ message: "Incorrect email or password." });
            }

            const isPasswordMatch = await bcrypt.compare(password, User.password);
            if (!isPasswordMatch) {
                return res.status(401).json({ message: "Incorrect email or password." });
            }

            if (role !== User.role) {
                return res.status(403).json({ message: "Account doesn't exist with current role." });
            }

            const tokenData = { userId: User._id };

            const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });
            const responseUser = {
                _id: User._id,
                fullName: User.fullName,
                email: User.email,
                phone: User.phone,
                role: User.role,
                profile: User.profile
            };

            return res.status(200)
                .cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' })
                .json({
                    message: `Welcome back ${responseUser.fullName}`,
                    user: responseUser,
                });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error!" });
        }
    }

    static logout = async (req, res) => {
        try {
            return res.status(200)
                .cookie("token", "", { maxAge: 0, httpOnly: true, sameSite: 'strict' })
                .json({ message: "Logged out successfully!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error!" });
        }
    }

    static updateProfile = async (req, res) => {
        try {
            const { fullName, email, phone, bio, skills } = req.body;
            const userId = req.id;
            let resumeResult = null;
            if (req.file) {
                console.log('File received:', req.file);
                const fileUri = getDataUri(req.file);
                console.log('File URI:', fileUri);
                resumeResult = await cloudinary.uploader.upload(fileUri.content);
                console.log('Resume upload result:', resumeResult);
            } else {
                console.log('No file uploaded');
            }
    
            // Prepare the update object
            const updateData = {};
    
            if (fullName) updateData.fullName = fullName;
            if (email) updateData.email = email;
            if (phone) updateData.phone = phone;
            if (bio) updateData['profile.bio'] = bio;
            if (skills) updateData['profile.skills'] = skills.split(",");
    
            // If resume was uploaded, add resume info to updateData
            if (resumeResult) {
                updateData['profile.resume'] = resumeResult.secure_url;
                updateData['profile.resumeOriginalName'] = req.file.originalname;
            }
    
            // Find user by ID and update
            const updatedUser = await user.findByIdAndUpdate(userId, updateData, { new: true });
    
            // Check if the user was found and updated
            if (!updatedUser) {
                return res.status(404).json({ message: "User not found." });
            }
    
            res.status(200).json({ message: "Profile updated successfully.", user: updatedUser });
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "An error occurred while updating the profile." });
        }
    }
}

export default UserController;
