import React from 'react'
import { useParams } from 'react-router-dom'

const InsertJob = () => {
    const {id} = useParams();

    
    return (

        <div className='flex'>
            <div className="w-2/5"></div>
            <div className='w-1/2 pt-14'>
                <>
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 ">
                            <div className="w-full px-3 mb-6">
                               
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="job-title"
                                    type="text"
                                    placeholder="Enter job title"
                                />
                            </div>
                        </div>


                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="job-salary"
                                    type="text"
                                    placeholder="Enter salary"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                               
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="job-location"
                                    type="text"
                                    placeholder="Enter location"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                               
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                                    id="job-type"
                                >
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Contract</option>
                                </select>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                               
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                                    id="experience-level"
                                >
                                    <option>Entry Level</option>
                                    <option>Mid Level</option>
                                    <option>Senior Level</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="position"
                                    type="text"
                                    placeholder="Enter position"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                               
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="company-id"
                                    type="text"
                                    value={id}
                                    placeholder="Enter company ID"
                                />
                            </div>
                        </div>



                        <div className="flex flex-wrap -mx-3 ">
                            <div className="w-full px-3 mb-6">
                              
                                <textarea
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="job-description"
                                    placeholder="Enter job description"
                                ></textarea>
                            </div>
                        </div>



                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3 mb-6">
                               
                                <textarea
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="job-requirements"
                                    placeholder="Enter job requirements"
                                ></textarea>
                            </div>
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
                </>


            </div>

        </div>
    )
}

export default InsertJob