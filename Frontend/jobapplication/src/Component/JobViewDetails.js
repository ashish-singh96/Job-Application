import React from 'react'
import { Link } from 'react-router-dom'
const JobViewDetails = () => {
    return (
        <>
            <div className="flex items-center justify-center pt-10 mb-12">
                <div className="w-9/12 rounded-lg border border-gray-200 bg-white shadow-lg">
                    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                        <div className="flex items-center space-x-4">
                            <div className="h-10 w-10 rounded-full bg-cover bg-center bg-[url('https://i.pravatar.cc/40')]"></div>
                            <div>
                                <div className="text-lg font-semibold text-gray-800">Google, India</div>
                                <div className="text-sm text-gray-500">2 hours ago</div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Link to={'/apply-job'} target='_blank'>
                                <button className="rounded-lg border border-blue-500 bg-blue-600 px-6 py-2 text-white text-sm font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300">
                                    Apply
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="p-6">
                        <div className="mb-4 flex justify-between">
                            <div className="text-xl font-bold text-gray-800">
                                Senior Software Engineer
                            </div>
                            <div className="text-sm font-medium text-gray-600">
                                Gurugram, Haryana
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="text-lg font-semibold text-gray-800">Job Summary: </span>
                            <p className="mt-2 text-gray-700">
                                Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum consectetur quis. Etiam faucibus est risus, ac condimentum mauris consequat nec. Curabitur eget feugiat massa.
                            </p>
                        </div>
                        <div className="mb-4">
                            <span className="text-lg font-semibold text-gray-800">Responsibilities: </span>
                            <ul className="mt-2 list-inside list-disc text-gray-700">
                                <li>Collaborate with cross-functional teams to gather and analyze requirements and translate them into technical specifications and system designs.</li>
                                <li>Design, develop, test, and maintain high-quality web applications using Angular.</li>
                                <li>Convert design mockups and wireframes into high-quality, responsive Angular components with pixel-perfect accuracy.</li>
                                <li>Conduct code reviews to maintain code quality, readability, and adherence to best practices.</li>
                                <li>Optimize application performance through profiling, code refactoring, and performance tuning.</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-lg font-semibold text-gray-800">Requirements: </span>
                            <ul className="mt-2 list-inside list-disc text-gray-700">
                                <li>Collaborate with cross-functional teams to gather and analyze requirements and translate them into technical specifications and system designs.</li>
                                <li>Design, develop, test, and maintain high-quality web applications using Angular.</li>
                                <li>Convert design mockups and wireframes into high-quality, responsive Angular components with pixel-perfect accuracy.</li>
                                <li>Conduct code reviews to maintain code quality, readability, and adherence to best practices.</li>
                                <li>Optimize application performance through profiling, code refactoring, and performance tuning.</li>
                            </ul>
                        </div>


                        <div className="mb-6 mt-6 p-4 bg-gray-50 rounded-lg shadow-sm border">
                            <div className="mb-4">
                                <span className="text-lg font-semibold text-black">Job Type: </span>
                                <span className="text-gray-700">Full-time, Permanent</span>
                            </div>
                            <div className="mb-4">
                                <span className="text-lg font-semibold text-black">Pay: </span>
                                <span className="text-gray-700">₹1,500,000.00 - ₹1,800,000.00 per year</span>
                            </div>
                            <div className="mb-4">
                                <span className="text-lg font-semibold text-black">Schedule: </span>
                                <ul className="mt-2 list-disc list-inside text-gray-700">
                                    <li>Day shift</li>
                                    <li>Monday to Friday</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <span className="text-lg font-semibold text-black">Supplemental Pay: </span>
                                <ul className="mt-2 list-disc list-inside text-gray-700">
                                    <li>Joining bonus</li>
                                    <li>Performance bonus</li>
                                    <li>Shift allowance</li>
                                    <li>Yearly bonus</li>
                                </ul>
                            </div>

                            <span className="text-lg font-semibold text-black">Share your resume: </span>
                            <a href="mailto:hr@xyz.com" className="ml-2 text-blue-600 hover:underline">
                                hr@xyz.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobViewDetails