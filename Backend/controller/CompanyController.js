import Company from "../model/CompanyModel.js";
import { v2 as cloudinary } from 'cloudinary';

class CompanyController {

    static insert_company = async (req, res) => {
        try {
            const { companyName } = req.body;

            if (!companyName) {
                return res.status(403).json({ message: "Company name is required!" });
            }

            let company = await Company.findOne({ name: companyName });

            if (company) {
                return res.status(404).json({ message: "You can't register the same company" });
            }

            company = await Company.create({
                name: companyName,
                userId: req.id,
            });

            return res.status(200).json({ message: "Company registered successfully!", company });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    static get_company = async (req, res) => {
        try {
            const userId = req.id;
            const company = await Company.find({ userId });
            if (!company) {
                return res.status(403).json({ message: "Company not found!" });
            }

            return res.status(200).json({ message: "Company get Successfully!", company });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error!" });
        }
    }

    static get_one_company = async (req, res) => {
        try {
            const id = req.params.id;

            const company = await Company.findById({ _id: id });

            if (!company) {
                return res.status(403).json({ message: "Company not found!" });
            }

            return res.status(200).json({ message: "Get one company!", company });
        } catch (error) {
            console.log(error);
        }
    }

    static update_company = async (req, res) => {
        try {
            const { name, website, location, description } = req.body;
            const id = req.params.id;


            if (!req.files || !req.files.logo) {
                return res.status(400).json({ message: "Logo is required!" });
            }

            const logo = req.files.logo;


            const logoResult = await cloudinary.uploader.upload(logo.tempFilePath, {
                folder: "Ashish/jobApplication"
            });


            const updateData = await Company.findByIdAndUpdate(
                { _id: id },
                {
                    logo: {
                        public_id: logoResult.public_id,
                        url: logoResult.secure_url,
                    },
                    name,
                    description,
                    website,
                    location,
                },
                { new: true }
            );

            if (!updateData) {
                return res.status(404).json({ message: "Company not found!" });
            }

            res.status(200).json({ message: "Company updated successfully", updateData });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error!' });
        }
    }


};

export default CompanyController;
