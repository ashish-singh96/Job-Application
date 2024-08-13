import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const ApplyJob = () => {
    // Initialize state to manage checkbox status
    const [isChecked, setIsChecked] = useState(false);

    // Initialize state to manage Education checkbox status
    const [isEducationChecked, setIsEducationChecked] = useState(false);

    // Initialize state to manage FormVisible status
    const [isFormVisible, setIsFormVisible] = useState(false);


    // Initialize state to manage EducationFormVisible status
    const [isEducationFormVisible, setIsEducationFormVisible] = useState(false);

    // Function to toggle checkbox state
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // Function to toggle Education FormVisible state
    const handleAddClickEducation = () => {
        setIsEducationFormVisible(!isEducationFormVisible);
    };
    // Function to toggle Experience FormVisible state 

    const handleAddClick = () => {
        setIsFormVisible(!isFormVisible);
    }

    // Function to toggle Education checkbox state
    const handleEducationCheckboxChange = () => {
        setIsEducationChecked(!isEducationChecked);
    };
    return (
        <div className='overflow-x-hidden'>
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


            <section className='p-6 mx-4 sm:mx-14  mt-5'>
                <div className='text-start'>
                    <strong className='text-2xl text-gray-800'>Easy Apply</strong>
                    <p className='text-gray-600 text-sm mt-2'>
                        Choose an option to autocomplete your application. You can still fill your profile manually.
                    </p>

                    <div className='mt-8 flex flex-col md:flex-row items-center'>
                        <div className='w-full md:w-3/4 border-dashed border-2 border-gray-400 h-24 flex items-center justify-center bg-white rounded-lg mb-4 md:mb-0 p-4'>
                            <label className='text-gray-500 cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 flex flex-col items-center justify-center h-20 p-4'>
                                <input type='file' className='sr-only' />
                                <span className='text-gray-600 font-bold'>Browse resume</span>
                                <span className='mx-1'>or</span>
                                <span className='text-gray-500'>just drop it here <span className='text-sm text-gray-400'>(Optional)</span></span>
                            </label>
                        </div>




                        <div className='w-full md:w-1/4 md:ml-6'>
                            <button className='bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-full text-white px-4 py-3 text-lg font-bold w-full'>
                                Apply With Indeed
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className='border mx-4 sm:mx-10 border-b mt-4 border-gray-400'></div>

            {/* Personal information */}
            <section className='p-6 mx-4 sm:mx-14 mt-5'>
                <div className='text-start'>
                    <strong className='text-2xl text-gray-800'>Personal information</strong>
                    <p className='text-gray-600 text-sm mt-2'>Fields marked with * are required.</p>
                </div>

                <div className='w-full flex space-x-4 mt-4'>
                    <div className='w-1/2'>
                        <label className='text-sm text-gray-700'>
                            First Name <span className='text-red-700'>*</span>
                        </label>
                        <input type='text' className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'></input>
                    </div>

                    <div className='w-1/2'>
                        <label className='text-sm text-gray-700'>
                            Last Name <span className='text-red-700'>*</span>
                        </label>
                        <input type='text' className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'></input>
                    </div>
                </div>

                <div className='w-full flex space-x-4 mt-4'>
                    <div className='w-1/2'>
                        <label className='text-sm text-gray-700'>
                            Email <span className='text-red-700'>*</span>
                        </label>
                        <input type='text' className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'></input>
                    </div>

                    <div className='w-1/2'>
                        <label className='text-sm text-gray-700'>
                            Confirm Your Email <span className='text-red-700'>*</span>
                        </label>
                        <input type='text' className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'></input>
                    </div>
                </div>


                <div className='w-full flex space-x-4 mt-4'>
                    <div className='w-1/2'>
                        <label className='text-sm text-gray-700'>
                            Place of residence <span className='text-red-700'>*</span>
                        </label>
                        <input type='text' className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'></input>
                    </div>

                    <div className='w-1/2'>
                        <label className='text-sm text-gray-700'>
                            Phone number <span className='text-red-700'>*</span>
                        </label>
                        <div className='flex mt-1'>
                            <div className='flex items-center border border-gray-700 bg-gray-100 pl-2 pr-3 '>
                                <img src='../../Images/india-flag.webp' alt='Country Flag' className='w-4 h-4 mr-1' />
                                <span className='text-gray-700 text-sm'>+91</span>
                            </div>
                            <input
                                type='number'
                                className='w-full border border-gray-700 outline-none pl-2 h-8 '

                            />
                        </div>
                    </div>

                </div>



            </section>


            {/* Experience  */}

            <section className='p-6 mx-4 sm:mx-14 mt-5'>
                <div className='flex justify-between items-center'>
                    <strong className='text-2xl text-gray-800'>
                        Experience<span className='text-red-700'>*</span>
                    </strong>
                    <button
                        className='rounded-full bg-[#FFFFFF] text-center border-2 border-[#365679] px-14 py-1 text-[#365679] font-bold'
                        onClick={handleAddClick}
                    >
                        <i className="fa-solid fa-plus text-lg"></i> Add
                    </button>
                </div>

                {isFormVisible && (
                    <div className='flex text-start pt-3'>
                        <div className='w-32 hidden sm:block'>
                            <div className='w-20 h-20 bg-gray-100 rounded-full flex justify-center items-center mb-4'>
                                <img src='../../Images/experience-default.png' alt='experience' className='w-12 h-12 ' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-[#FBFBFB] rounded-lg w-full p-4'>
                                <span className='text-sm text-gray-600'>
                                    Fields marked with * are required.
                                </span>

                                <div className='w-full flex space-x-4 mt-4'>
                                    <div className='w-1/2'>
                                        <label className='text-sm text-gray-700'>
                                            Title <span className='text-red-700'>*</span>
                                        </label>
                                        <input
                                            type='text'
                                            className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                                        />
                                    </div>

                                    <div className='w-1/2'>
                                        <label className='text-sm text-gray-700'>
                                            Company <span className='text-red-700'>*</span>
                                        </label>
                                        <input
                                            type='text'
                                            className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                                        />
                                    </div>
                                </div>

                                <div className='w-full mt-4'>
                                    <label className='text-sm text-gray-700'>
                                        Office Location <span className='text-red-700'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                                    />
                                </div>

                                <div className='w-full mt-4'>
                                    <label className='text-sm text-gray-700'>
                                        Description <span className='text-red-700'>*</span>
                                    </label>
                                    <textarea
                                        rows={4}
                                        className='w-full border border-gray-700 outline-none pl-2 mt-1'
                                    ></textarea>
                                </div>

                                <div className='w-full flex space-x-4 mt-3'>
                                    <div className='w-1/2'>
                                        <label className='text-sm text-gray-700'>
                                            From <span className='text-red-700'>*</span>
                                        </label>
                                        <input
                                            type='date'
                                            className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                                        />
                                    </div>

                                    <div className='w-1/2'>
                                        <label className='text-sm text-gray-700'>
                                            To <span className='text-red-700'>*</span>
                                        </label>
                                        <input
                                            type='date'
                                            className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                                        />
                                    </div>
                                </div>

                                <label className='pt-4 flex items-center'>
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className='ml-2'>I currently attend</span>
                                </label>
                            </div>
                        </div>
                    </div>
                )}
            </section>


            {/* Education  */}

            <section className='p-6 mx-4 sm:mx-14 mt-5'>
                <div className='flex justify-between items-center'>
                    <strong className='text-2xl text-gray-800'>
                        Education<span className='text-red-700'>*</span>
                    </strong>
                    <button
                        className='rounded-full bg-[#FFFFFF] text-center border-2 border-[#365679] px-14 py-1 text-[#365679] font-bold'
                        onClick={handleAddClickEducation}
                    >
                        <i className="fa-solid fa-plus text-lg"></i> Add
                    </button>
                </div>

                {isEducationFormVisible && (
                    <div className='flex text-start pt-3'>
                        <div className='w-32 hidden sm:block'>
                            <div className='w-20 h-20 bg-gray-100 rounded-full flex justify-center items-center mb-4'>
                                <img src='../../Images/education-default.png' alt='experience' className='w-12 h-12 ' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='bg-[#FBFBFB] rounded-lg w-full p-4'>
                                <span className='text-sm text-gray-600'>
                                    Fields marked with * are required.
                                </span>

                                <div className='w-full flex space-x-4 mt-4'>
                                    <div className='w-1/2'>
                                        <label className='text-sm text-gray-700'>
                                            Title <span className='text-red-700'>*</span>
                                        </label>
                                        <input
                                            type='text'
                                            className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                                        />
                                    </div>

                                    <div className='w-1/2'>
                                        <label className='text-sm text-gray-700'>
                                            Company <span className='text-red-700'>*</span>
                                        </label>
                                        <input
                                            type='text'
                                            className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                                        />
                                    </div>
                                </div>

                                <div className='w-full mt-4'>
                                    <label className='text-sm text-gray-700'>
                                        Office Location <span className='text-red-700'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                                    />
                                </div>

                                <div className='w-full mt-4'>
                                    <label className='text-sm text-gray-700'>
                                        Description <span className='text-red-700'>*</span>
                                    </label>
                                    <textarea
                                        rows={4}
                                        className='w-full border border-gray-700 outline-none pl-2 mt-1'
                                    ></textarea>
                                </div>

                                <div className='w-full flex space-x-4 mt-3'>
                                    <div className='w-1/2'>
                                        <label className='text-sm text-gray-700'>
                                            From <span className='text-red-700'>*</span>
                                        </label>
                                        <input
                                            type='date'
                                            className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                                        />
                                    </div>

                                    <div className='w-1/2'>
                                        <label className='text-sm text-gray-700'>
                                            To <span className='text-red-700'>*</span>
                                        </label>
                                        <input
                                            type='date'
                                            className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                                        />
                                    </div>
                                </div>

                                <label className='pt-4 flex items-center'>
                                    <input
                                        type="checkbox"
                                        checked={isEducationChecked}
                                        onChange={handleEducationCheckboxChange}
                                    />
                                    <span className='ml-2'>I currently attend</span>
                                </label>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* On the web  */}

            <section className='p-6 mx-4 sm:mx-14 mt-5'>
                <div className='item-start'>
                    <strong className='text-2xl text-gray-800'>
                        On the web
                    </strong>

                    <div className='w-full flex space-x-4 mt-4'>
                        <div className='w-1/2'>
                            <label className='text-sm text-gray-700'>
                                LinkedIn
                            </label>
                            <input
                                type='text'
                                className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                            />
                        </div>

                        <div className='w-1/2'>
                            <label className='text-sm text-gray-700'>
                                Facebook
                            </label>
                            <input
                                type='text'
                                className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                            />
                        </div>
                    </div>

                    <div className='w-full flex space-x-4 mt-4'>
                        <div className='w-1/2'>
                            <label className='text-sm text-gray-700'>
                                X (fka Twitter)
                            </label>
                            <input
                                type='text'
                                className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                            />
                        </div>

                        <div className='w-1/2'>
                            <label className='text-sm text-gray-700'>
                                Website
                            </label>
                            <input
                                type='text'
                                className='w-full border border-gray-700 outline-none pl-2 h-8 mt-1'
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* Resume */}
            <section className='p-6 mx-4 sm:mx-14 mt-5'>
                <div className='text-start'>
                    <strong className='text-2xl text-gray-800'>
                        Resume<span className='text-red-700'>*</span>
                    </strong>

                    <div className='border-dashed border-2 border-gray-400 rounded-lg h-20 w-full flex items-center justify-center mt-3'>
                        <label className='text-gray-500 cursor-pointer  flex items-center justify-center h-full w-full'>
                            <input type='file' className='sr-only ' />
                            <span className='text-gray-600 font-bold'>Browse resume</span>
                            <span className='mx-1'>or</span>
                            <span className='text-gray-500'>just drop it here </span>
                        </label>
                    </div>
                </div>
            </section>


            {/* Message to Hiring Manager */}

            <section className='p-6 mx-4 sm:mx-14 mt-5'>
                <div className='text-start'>
                    <strong className='text-2xl text-gray-800'>
                        Message to Hiring Manager<span className='text-red-700'>*</span>
                    </strong>
                    <p className='text-gray-600 text-sm mt-4'>
                        Let the company know about your interest working there.
                    </p>

                    <textarea className='border border-gray-400 w-full mt-1 outline-none px-4' rows={5}>

                    </textarea>
                </div>
            </section>

            <div className='border mx-4 sm:mx-10 border-b mt-4 mb-8 border-gray-400'></div>
            <div className="flex justify-end mb-11 px-16">
                <Link to={'/apply-job/screening'}>
                    <button className="px-12 py-1 rounded-full text-center text-white bg-[#365679]">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ApplyJob