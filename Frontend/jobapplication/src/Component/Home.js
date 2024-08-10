import React, { useContext, useState } from 'react';
import { MyContext } from '../ContextApi';
const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { allJobs } = useContext(MyContext);
    const jobs = [
        'Frontend Developer',
        'Backend Developer',
        'Data Engineer',
        'MERN Stack Developer',
        'Full Stack Developer',
        'DevOps Engineer',
        'UI/UX Designer',
    ];

    const next = () => {
        if (currentIndex + 3 < jobs.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center pt-10">
                <h1 className="text-center text-lg w-1/2 bg-cyan-200 rounded-full p-2">
                    No 1 Job Application Website
                </h1>
            </div>

            <div className="flex items-center justify-center pt-5 px-4 md:px-8 lg:px-16">
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug md:leading-relaxed">
                    Search, Apply & <br />
                    Get Your <span className="text-blue-600">Dream Job</span>
                </h1>
            </div>

            <div className="flex items-center justify-center pt-5">
                <div className="w-3/4 md:w-1/2 lg:w-5/6 text-center px-4">
                    <span className="block text-lg">
                        Explore thousands of job openings from top companies across various industries. Our platform is regularly updated with the latest opportunities tailored to your skills and preferences.
                    </span>
                </div>
            </div>

            {/* Search bar */}
            <div className="flex items-center justify-center pt-1">
                <div className="relative my-6 w-1/2 md:w-1/3 flex items-center justify-center">
                    <input
                        id="id-s03"
                        type="search"
                        name="id-s03"
                        placeholder="Search job here"
                        aria-label="Search content"
                        className="relative w-full rounded-full h-10 px-4 pr-12 text-sm transition-all border outline-none focus:border-cyan-200 peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                        aria-label="Search icon"
                        role="graphics-symbol"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </div>
            </div>

            {/* Horizontal scrolling */}
            <div className="w-3/4 flex items-center justify-center pt-3 mx-auto">
                <i
                    className="fa-solid fa-arrow-left cursor-pointer bg-gray-100 rounded-full p-3"
                    onClick={prev}
                ></i>
                <div className="flex overflow-hidden w-full mx-4">
                    <div
                        className="flex transition-transform duration-300"
                        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                    >
                        {jobs.map((job, index) => (
                            <div key={index} className="w-1/3 flex-shrink-0 px-2">
                                <span className="bg-gray-100 rounded-full px-3 py-2 block text-center">
                                    {job}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <i
                    className="fa-solid fa-arrow-right cursor-pointer bg-gray-100 rounded-full p-3"
                    onClick={next}
                ></i>
            </div>

            <div className="pt-10 px-4 md:px-10 mb-10">
                <h1 className="text-3xl md:text-5xl font-semibold text-start">
                    Latest <span className="text-blue-600">Job</span> Openings
                </h1>

                <div className="pt-10 px-4 md:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {
                            allJobs.map((item, index) => {
                                return (
                                    <div key={index} className="overflow-hidden bg-white rounded-lg shadow-md text-slate-500 shadow-slate-200">
                                        <div className="p-6">
                                            <h3 className="text-xl font-medium text-slate-700">{item.companyName}</h3>
                                            <h1 className="text-2xl font-semibold text-slate-900">India</h1>
                                            <h3 className="text-xl font-medium text-black">{item.title}</h3>
                                            <p className="mt-1 text-sm text-slate-600 text-justify">
                                               {item.description}
                                            </p>
                                        </div>
                                        <div className='mx-4 p-5'>
                                            <div className='grid grid-cols-3 gap-4'>
                                                <span className='text-blue-600 rounded-full text-center bg-gray-100'>{item.position}</span>
                                                <span className='bg-gray-100 text-center rounded-full text-black'>{item.salary} LPA</span>
                                                <span className='text-orange-400 text-center rounded-full bg-gray-100'>{item.jobType}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }





                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
