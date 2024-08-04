import React, { useContext, useState } from 'react';
import { MyContext } from '../ContextApi';
import { Link } from 'react-router-dom';

const RegisteredCompany = () => {
    const { handleCompanyInsert } = useContext(MyContext);

    const [company, setCompany] = useState({
        companyName: ""
    });

    const [companyId, setCompanyId] = useState(null);

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
            const { companyName } = company;

            if (!companyName) {
                alert("Something is missing.");
                return;
            }

            const res = await handleCompanyInsert(company);
                alert("Data inserted successfully");
                setCompanyId(res.data._id);
                resetCompany();
           
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        clickToContinue();
    };

    return (
        <div className="flex">
            <div className="w-2/5"></div>
            <div className="w-4/5">
                <div className="w-3/4 pt-32">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md items-center justify-center rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold text-gray-400 mb-4">
                                Enter Company Name
                            </h2>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name='companyName'
                                value={company.companyName}
                                onChange={handleChange}
                                placeholder="Company Name..."
                            />
                        </div>
                          
                        <div className="flex items-center justify-between">
                            {/* {companyId && ( */}
                                <Link to={`/admin/company-details/${companyId}`}>
                                    <button
                                        className="bg-blue-500 rounded-md hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Continue
                                    </button>
                                </Link>
                            {/* )} */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisteredCompany;
