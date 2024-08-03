import React, { useContext, useState } from 'react';
import { MyContext } from '../ContextApi';

const RegisteredCompany = () => {
    const { handleCompanyInsert } = useContext(MyContext);

    const [company, setCompany] = useState({
        companyName: ""
    });

    const resetCompany = () => {
        setCompany({
            companyName: ""
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompany({ ...company, [name]: value });
    };

    const clickToContinue = async () => {
        try {
            await handleCompanyInsert(company);
            alert("Data inserted successfully");
            resetCompany();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
           <div className='flex'>
            <div className='w-1/5'></div>

            <div className='w-4/5'>
            <div className="relative flex justify-center items-center bg-gray-300 min-h-screen">
                <div className="relative">
                    <input
                        type="text"
                        name="companyName"
                        value={company.companyName}
                        placeholder="Company Name"
                        onChange={handleChange}
                        className="peer relative h-10 w-full rounded-md border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    />
                    <label
                        className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                    >
                        Company name
                    </label>
                </div>
                
            </div>

            <div className="flex gap-4 mt-4">
                    <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span>Cancel</span>
                    </button>

                    <button onClick={clickToContinue} className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span>Continue</span>
                    </button>
                </div>
                
            </div>
            
           </div>




        </>
    );
};

export default RegisteredCompany;
