import user from "../model/UserMode.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
class UserController {

    static registerUser = async (req, res) => {
        try {
            const { fullName, email, role, phone, password } = req.body;

            if (!fullName || !email || !role || !phone || !password) {
                return res.status(403).json({ message: "Please fill all details" });
            }

            const userExits = await user.findOne({ email });

            if (userExits) {
                return res.status(403).json({ message: "User already exists with this email." });
            }

            const hashPassword = await bcrypt.hash(password, 10);

            const data = new user({
                fullName,
                email,
                phone,
                password: hashPassword,
                role,
            });

            await data.save();
            res.status(200).json({ message: "Account created successfully." });
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
                return res.status(403).json({ message: "Incorrect email or password." });
            }
            const isPasswordMatch = await bcrypt.compare(password, User.password);
            if (!isPasswordMatch) {
                return res.status(403).json({ message: "Incorrect email or password." });
            }
            if (role !== User.role) {
                return res.status(403).json({ message: "Account doesn't exist with current role." });
            }
            // Create token data
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
                    User: responseUser,
                    token,
                });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error!" });
        }
    }

    
};
export default UserController;