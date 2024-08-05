import React, { useContext } from 'react';
import { MyContext } from '../ContextApi';
import { Link } from 'react-router-dom';
const RegisteredCompany = () => {
    const { allCompanies } = useContext(MyContext);

    return (
        <div className="flex">
            <div className="w-2/5"></div>
            <div className="w-4/5">
                <div className="w-3/4 pt-32">
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                                >
                                                    Sr.No
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                                >
                                                    Company Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                                >
                                                    Date
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            {allCompanies.map((company, index) => {
                                                const date = new Date(company.createdAt);
                                                const formattedDate = date.toLocaleDateString();
                                                const id = company._id;
                                                return (
                                                    <tr key={index}>
                                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                            {index + 1}
                                                        </td>
                                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                            {company.name}
                                                        </td>
                                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                            {formattedDate}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                           <Link to={`/admin/insert-job/${id}`}>
                                                           <button
                                                                type="button"
                                                                className="inline-flex bg-blue-400 gap-4 p-2 items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white  focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400 mr-2"
                                                            >
                                                                Job Insert
                                                            </button>
                                                           </Link>

                                                            <button
                                                                type="button"
                                                                className="inline-flex bg-red-500 p-2 items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>

                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisteredCompany;
