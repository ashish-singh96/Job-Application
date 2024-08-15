import Job from "../model/JobModel.js";

class JobController {
    static insert_job = async (req, res) => {
        try {
            const { job_overview, job_title, contract_duration, location, salary, positions, job_summary, responsibilities, requirements, schedule, supplementalPay, hrEmail } = req.body;

            if (!job_overview || !job_title || !contract_duration || !location || !salary || !positions || !job_summary || !responsibilities || !requirements || !schedule || !supplementalPay || !hrEmail) {
                res.status(403).json({ message: "Something is missing!" });
            }

            const data = new Job({
                job_overview: job_overview,
                job_title: job_title,
                contract_duration: contract_duration,
                location: location,
                salary: salary,
                positions: positions,
                job_summary: job_summary,
                responsibilities: responsibilities.split(','),
                requirements: requirements.split(","),
                schedule: schedule.split(","),
                supplementalPay: supplementalPay.split(","),
                hrEmail: hrEmail,
            })

            await data.save();
            res.status(200).json({ message: "Job Insert Successfully!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
};

export default JobController;