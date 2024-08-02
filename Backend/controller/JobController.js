import Job from "../model/JobModel.js";
import Company from "../model/CompanyModel.js";
class JobController {

    static insert_job = async (req, res) => {
        try {
            const { title, description, requirements, salary, location, jobType, experienceLevel, position, companyId } = req.body;

            const userId = req.userId;

            if (!userId) {
                return res.status(400).json({ message: "User ID is missing" });
            }

            if (!title || !description || !requirements || !salary || !location || !jobType || !experienceLevel || !companyId || !position) {
                return res.status(403).json({ message: "All fields are required" });
            }

            // Check if the company exists
            const companyExists = await Company.findById(companyId);
            if (!companyExists) {
                return res.status(404).json({ message: "Company not found" });
            }

            // Create new job
            const job = new Job({
                title,
                description,
                requirements: requirements.split(","),
                salary,
                location,
                jobType,
                experienceLevel,
                company: companyId,
                create_by: userId,
                position,
            });

            await job.save();
            res.status(200).json({ message: "Job posted successfully!", job });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    
};

export default JobController;