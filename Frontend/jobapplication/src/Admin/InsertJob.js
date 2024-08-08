import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../ContextApi';
import axios from 'axios';

const InsertJob = () => {
    const { id } = useParams();
    const { InsertJob } = useContext(MyContext);

    const [insertJob, setInsertJob] = useState({
        title: "",
        description: "",
        requirements: [""],
        salary: "",
        location: "",
        jobType: "",
        experienceLevel: "",
        position: "",
        companyId: id,
    });

    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setInsertJob((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleChangeRequirement = (index, value) => {
        const newRequirements = [...insertJob.requirements];
        newRequirements[index] = value;
        setInsertJob((prevState) => ({
            ...prevState,
            requirements: newRequirements,
        }));
    };

    const handleAddRequirement = () => {
        setInsertJob((prevState) => ({
            ...prevState,
            requirements: [...prevState.requirements, ""],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await InsertJob(insertJob);
            alert("done")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-lg pt-14">
                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3 mb-6">
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="title"
                                type="text"
                                value={insertJob.title}
                                onChange={handleChangeValue}
                                placeholder="Enter job title"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="salary"
                                type="text"
                                value={insertJob.salary}
                                onChange={handleChangeValue}
                                placeholder="Enter salary"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="location"
                                type="text"
                                value={insertJob.location}
                                onChange={handleChangeValue}
                                placeholder="Enter location"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <select
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                                name="jobType"
                                value={insertJob.jobType}
                                onChange={handleChangeValue}
                            >
                                <option value="" disabled>Select job type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <select
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                                name="experienceLevel"
                                value={insertJob.experienceLevel}
                                onChange={handleChangeValue}
                            >
                                <option value="" disabled>Select experience level</option>
                                <option value="Entry Level">Entry Level</option>
                                <option value="Mid Level">Mid Level</option>
                                <option value="Senior Level">Senior Level</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="position"
                                type="text"
                                value={insertJob.position}
                                onChange={handleChangeValue}
                                placeholder="Enter position"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="companyId"
                                type="text"
                                value={insertJob.companyId}
                                readOnly
                                placeholder="Enter company ID"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3 mb-6">
                            <textarea
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="description"
                                value={insertJob.description}
                                onChange={handleChangeValue}
                                placeholder="Enter job description"
                            ></textarea>
                        </div>
                    </div>

                    {insertJob.requirements.map((req, index) => (
                        <div key={index} className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <textarea
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    value={req}
                                    onChange={(e) => handleChangeRequirement(index, e.target.value)}
                                    placeholder="Enter job requirement"
                                ></textarea>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-end mb-6">
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={handleAddRequirement}
                        >
                            Add Requirement
                        </button>
                    </div>

                    <div className="flex justify-end">
                        <button
                            className="bg-teal-500 w-full hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            Insert
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InsertJob;
