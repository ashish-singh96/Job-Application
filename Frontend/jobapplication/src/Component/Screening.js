import React, { useState } from 'react';

const Screening = () => {
    const [noticePeriod, setNoticePeriod] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [ctc, setCtc] = useState('');
    const [college, setCollege] = useState('');
    const [skills, setSkills] = useState('');

    const handleNoticePeriodChange = (event) => {
        setNoticePeriod(event.target.value);
    };

    const handleWorkExperienceChange = (event) => {
        setWorkExperience(event.target.value);
    };

    const handleCtcChange = (event) => {
        setCtc(event.target.value);
    };

    const handleCollegeChange = (event) => {
        setCollege(event.target.value);
    }

    const handleSkillsChange = (event) => {
        setSkills(event.target.value);
    }
    const clearNoticePeriodSelection = () => {
        setNoticePeriod('');
    };

    const clearWorkExperienceSelection = () => {
        setWorkExperience('');
    };

    const clearCtcSelection = () => {
        setCtc('');
    };

    const clearCollegeSelection = () => {
        setCollege('');
    }

    const clearSkillsSelection = () => {
        setSkills('');
    }

    return (
        <div>
            <section>
                <div className='shadow-xl h-20 flex items-center justify-between px-4'>
                    <img className='h-14 w-20 mx-10' src='../../Images/logo.png' alt='logo' />
                    <div className='ml-4 mx-10'>
                        <strong className='text-gray-800 text-lg'>
                            Software Engineer (Fullstack/NodeJs/ReactJs)
                        </strong>
                        <p className='text-gray-600 text-sm text-center'>Gurugram, Haryana, India</p>
                    </div>
                </div>
            </section>

            <section className='p-6 mx-4 sm:mx-14 mt-5'>
                <div className='text-start'>
                    <strong className='text-2xl text-gray-800'>Preliminary questions</strong>
                </div>

                <div className='w-full flex space-x-4 mt-4'>
                    <div className='w-full'>
                        <label className='text-sm text-gray-700'>
                            Where are you currently working (or last organisation you worked with)?
                            <span className='text-red-700'>*</span>
                        </label>
                        <input type='text' className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'></input>
                    </div>
                </div>

                <div className='w-full flex space-x-4 mt-4'>
                    <div className='w-full'>
                        <label className='text-sm text-gray-700'>
                            How much is your notice period?
                            <span className='text-red-700'>*</span>
                        </label>
                        <div className="relative">
                            <select
                                value={noticePeriod}
                                onChange={handleNoticePeriodChange}
                                className="appearance-none w-full border border-gray-700 outline-none pr-8 pl-2 h-8 mt-1 rounded-none"
                            >
                                <option value="" disabled selected hidden></option>
                                <option>Immediately Available</option>
                                <option>1 week</option>
                                <option>15 Days</option>
                                <option>1 Month</option>
                                <option>2 Month</option>
                                <option>3 Month</option>
                            </select>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                onClick={clearNoticePeriodSelection}
                            >
                                <i className={`fas ${noticePeriod ? 'fa-times' : 'fa-search'} text-gray-500`}></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full flex space-x-4 mt-4'>
                    <div className='w-full'>
                        <label className='text-sm text-gray-700'>
                            How much years of relevant work experience do you have?
                            <span className='text-red-700'>*</span>
                        </label>
                        <div className="relative">
                            <select
                                value={workExperience}
                                onChange={handleWorkExperienceChange}
                                className="appearance-none w-full border border-gray-700 outline-none pr-8 pl-2 h-8 mt-1 rounded-none"
                            >
                                <option value="" disabled selected hidden></option>
                                <option>Have Previous Internship Experience</option>
                                <option>0-1 Year</option>
                                <option>1-2 Year</option>
                                <option>2-3 Year</option>
                                <option>3-4 Year</option>
                                <option>4-5 Year</option>
                                <option>5-6 Year</option>
                            </select>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                onClick={clearWorkExperienceSelection}
                            >
                                <i className={`fas ${workExperience ? 'fa-times' : 'fa-search'} text-gray-500`}></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full flex space-x-4 mt-4'>
                    <div className='w-full'>
                        <label className='text-sm text-gray-700'>
                            What is your current/last annual CTC/monthly stipend?
                            <span className='text-red-700'>*</span>
                        </label>
                        <div className="relative">
                            <select
                                value={ctc}
                                onChange={handleCtcChange}
                                className="appearance-none w-full border border-gray-700 outline-none pr-8 pl-2 h-8 mt-1 rounded-none"
                            >
                                <option value="" disabled selected hidden></option>
                                <option>Have Previous Internship Experience</option>
                                <option>0-10k (monthly)</option>
                                <option>10-20k (monthly)</option>
                                <option>20-30k (monthly)</option>
                                <option>Above 30k (monthly)</option>
                                <option>0-5L CTC</option>
                                <option>5-10L </option>
                                <option>10-15L </option>
                                <option>15-20L </option>
                                <option>20-30L </option>
                                <option>Above 30L </option>
                            </select>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                onClick={clearCtcSelection}
                            >
                                <i className={`fas ${ctc ? 'fa-times' : 'fa-search'} text-gray-500`}></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full flex space-x-4 mt-4'>
                    <div className='w-full'>
                        <label className='text-sm text-gray-700'>
                            Which college you graduated from? (or currently studying)
                            <span className='text-red-700'>*</span>
                        </label>
                        <div className="relative">
                            <select
                                value={ctc}
                                onChange={handleCollegeChange}
                                className="appearance-none w-full border border-gray-700 outline-none pr-8 pl-2 h-8 mt-1 rounded-none"
                            >
                                <option value="" disabled selected hidden></option>
                                <option>IITs</option>
                                <option>NITs</option>
                                <option>IITs</option>
                                <option>DTU</option>
                                <option>LPU</option>
                                <option>PTU</option>
                                <option>NSIT </option>
                                <option>BITS </option>
                                <option>Other </option>
                            </select>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                onClick={clearCollegeSelection}
                            >
                                <i className={`fas ${college ? 'fa-times' : 'fa-search'} text-gray-500`}></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full flex space-x-4 mt-4'>
                    <div className='w-full'>
                        <label className='text-sm text-gray-700'>
                            Select the skills applicable to you?
                            <span className='text-red-700'>*</span>
                        </label>
                        <div className="relative">
                            <select
                                value={ctc}
                                onChange={handleSkillsChange}
                                className="appearance-none w-full border border-gray-700 outline-none pr-8 pl-2 h-8 mt-1 rounded-none"
                            >
                                <option value="" disabled selected hidden></option>
                                <option>React</option>
                                <option>Node</option>
                                <option>Mongoose</option>
                                <option>Express</option>
                                <option>Sales</option>
                                <option>Marking</option>
                                <option>Python </option>
                                <option>AI/ML </option>
                                <option>Scripting </option>
                            </select>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                onClick={clearSkillsSelection}
                            >
                                <i className={`fas ${skills ? 'fa-times' : 'fa-search'} text-gray-500`}></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full flex space-x-4 mt-4'>
                    <div className='w-full'>
                        <label className='text-sm text-gray-700'>
                            What is your story? Tell us what drives you, and help us get to know you. (~500 words)
                        </label>
                        <textarea rows={30} className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'></textarea>
                    </div>
                </div>



                <div className='w-full flex space-x-4 mt-4'>
                    <div className='w-full'>
                        <label className='text-sm text-gray-700'>
                            When can you start the internship? (applicable only for the internship role)
                        </label>
                        <input type='text' className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'></input>
                    </div>
                </div>


                <div className='w-full flex space-x-4 mt-4'>
                    <div className='w-full'>
                        <label className='text-sm text-gray-700'>
                            How long you are available for the internship? (applicable only for the internship role)
                        </label>
                        <input type='text' className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'></input>
                    </div>
                </div>


            </section>


            <div className='border mx-4 sm:mx-10 border-b mt-4 mb-8 border-gray-400'></div>

            <div className='flex'>
                <div className='w-1/2'>
                    <div>
                        <button className="px-12 mx-10 py-2.5 rounded-full text-center text-white bg-[#365679]">
                            Back
                        </button>
                    </div>
                </div>

                <div className='w-1/2'>
                    <div className="flex justify-end px-16">
                        <button className="px-12 py-2.5 mb-6 rounded-full text-center text-white bg-[#365679]">
                            Submit
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Screening;
