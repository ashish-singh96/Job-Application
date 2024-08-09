import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const navigate = useNavigate();
    const [allCompanies, setAllCompanies] = useState([]);
    const [allJobs, setAllJobs] = useState([]);

    useEffect(() => {
        getAllCompanies();
        getAllJobs();
    }, []);

    const handleLoginUser = async (loginUser) => {
        try {
            const res = await axios.post('http://localhost:5000/login', loginUser);
            const tokenData = res.data.user.token;
            const roleData = res.data.user.role;
            localStorage.setItem('Token', tokenData);
            localStorage.setItem('Role', roleData);
    
            if (roleData === 'student') {
                navigate('/');
            } else {
                navigate('/admin/dashboard');
            }
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
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
            });
            setAllCompanies(res.data.company);
        } catch (error) {
            console.log(error);
        }
    };
    
    const InsertJob = async (insertJob) => {
        try {
            console.log(insertJob, "insert job");
            const token = localStorage.getItem('Token'); // Ensure the key name matches how you store it
    
            if (!token) {
                console.error("Token not found in localStorage");
                return;
            }
    
            const res = await axios.post('http://localhost:5000/job_insert', insertJob, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(res.data, "Job inserted successfully");
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Request data:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
        }
    };

    const getAllJobs = async () => {
        try {
            const res = await axios.get('http://localhost:5000/get_all_jobs', {
            });
            setAllJobs(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <MyContext.Provider value={{ handleLoginUser, handleUserLogout, handleCompanyInsert, allCompanies, InsertJob ,allJobs}}>
            {children}
        </MyContext.Provider>
    );
};
