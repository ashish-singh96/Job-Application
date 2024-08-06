import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const history = useNavigate();
    const [allCompanies, setAllCompanies] = useState([]);
    const [insertJob, setInsertJob] = useState([]);

    useEffect(() => {
        getAllCompanies();
    }, []);

    const handleLoginUser = async (loginUser) => {
        try {
            const res = await axios.post('http://localhost:5000/login', loginUser);
            const tokenData = res.data.user.token;
            const roleData = res.data.user.role;
            localStorage.setItem('Token', tokenData); // No need to stringify
            localStorage.setItem('Role', roleData);

            if (res.data.user.role === 'student') {
                history('/');
            } else {
                history('/admin/dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleUserLogout = async () => {
        try {
            await axios.post('http://localhost:5000/logout', {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('Token')}`
                }
            });
            localStorage.removeItem("Token");
            localStorage.removeItem("Role");
        } catch (error) {
            console.log(error);
        }
    };

    const handleCompanyInsert = async (company) => {
        try {
            await axios.post('http://localhost:5000/company_insert', company, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('Token')}`
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getAllCompanies = async () => {
        try {
            const res = await axios.get('http://localhost:5000/company_get', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('Token')}`
                }
            });
            setAllCompanies(res.data.company);
        } catch (error) {
            console.log(error);
        }
    };

    const InsertJob = async (insertJob) => {
        try {
            const res = await axios.post('http://localhost:5000/job_insert', insertJob, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('Token')}`
                }
            });
            console.log(res, "Job inserted");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MyContext.Provider value={{ handleLoginUser, handleUserLogout, handleCompanyInsert, allCompanies, InsertJob }}>
            {children}
        </MyContext.Provider>
    );
};
