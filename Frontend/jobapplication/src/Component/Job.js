import React from 'react'
import { Link } from 'react-router-dom';
const Job = () => {
  const id = 563434;
  return (
    <>
      <section className="py-10">
        <div className="text-5xl font-bold text-center">
          <h1> All Featured Jobs</h1>
        </div>
      </section>

      <section className="pb-10">
        <div className="text-lg text-center text-gray-700 px-4 sm:px-8 lg:px-20">
          <p>
            Discover thousands of job openings from leading companies across diverse industries. Our platform is continuously updated with the latest opportunities, personalized to match your skills and career goals.
          </p>
        </div>
      </section>

      <section className="pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-4">

          <div className="bg-gray-200 p-5 h-48 flex flex-col space-y-4 rounded-lg shadow-lg">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-2xl text-black font-bold">Senior UX Designer</span>
                <span className="text-lg text-neutral-600">Full Time</span>
              </div>
              <span className="text-sm text-neutral-500 font-normal mt-1 block">Contract: 6 Months</span>
            </div>

            <div>
              <span className="text-lg text-black block">Location: New York USA</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg text-black font-semibold">Salary: <span className='text-blue-500'>27 LPA</span></span>
             <Link to={`/job-view/${id}`}>
             <button className="px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                View Details
              </button>
             </Link>
            </div>
          </div>






          <div className="bg-gray-200 p-5 h-48 flex flex-col space-y-4 rounded-lg shadow-lg">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-2xl text-black font-bold">Senior UX Designer</span>
                <span className="text-lg text-neutral-600">Full Time</span>
              </div>
              <span className="text-sm text-neutral-500 font-normal mt-1 block">Contract: 6 Months</span>
            </div>

            <div>
              <span className="text-lg text-black block">Location: New York USA</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg text-black font-semibold">Salary: <span className='text-blue-500'>27 LPA</span></span>
              <button className="px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                View Details
              </button>
            </div>
          </div>

          <div className="bg-gray-200 p-5 h-48 flex flex-col space-y-4 rounded-lg shadow-lg">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-2xl text-black font-bold">Senior UX Designer</span>
                <span className="text-lg text-neutral-600">Full Time</span>
              </div>
              <span className="text-sm text-neutral-500 font-normal mt-1 block">Contract: 6 Months</span>
            </div>

            <div>
              <span className="text-lg text-black block">Location: New York USA</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg text-black font-semibold">Salary: <span className='text-blue-500'>27 LPA</span></span>
              <button className="px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                View Details
              </button>
            </div>
          </div>

          <div className="bg-gray-200 p-5 h-48 flex flex-col space-y-4 rounded-lg shadow-lg">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-2xl text-black font-bold">Senior UX Designer</span>
                <span className="text-lg text-neutral-600">Full Time</span>
              </div>
              <span className="text-sm text-neutral-500 font-normal mt-1 block">Contract: 6 Months</span>
            </div>

            <div>
              <span className="text-lg text-black block">Location: New York USA</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg text-black font-semibold">Salary: <span className='text-blue-500'>27 LPA</span></span>
              <button className="px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                View Details
              </button>
            </div>
          </div>


          <div className="bg-gray-200 p-5 h-48 flex flex-col space-y-4 rounded-lg shadow-lg">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-2xl text-black font-bold">Senior UX Designer</span>
                <span className="text-lg text-neutral-600">Full Time</span>
              </div>
              <span className="text-sm text-neutral-500 font-normal mt-1 block">Contract: 6 Months</span>
            </div>

            <div>
              <span className="text-lg text-black block">Location: New York USA</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg text-black font-semibold">Salary: <span className='text-blue-500'>27 LPA</span></span>
              <button className="px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Job
