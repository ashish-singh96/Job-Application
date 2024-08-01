import axios from 'axios';
import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
export const MyContext = createContext();
export const MyProvider = ({ children }) => {
    const history = useNavigate();
    const handleLoginUser = async (loginUser) => {
        try {
            const res = await axios.post('http://localhost:5000/login', loginUser);
            const tokenData = res.data.user.token;
            const roleData = res.data.user.role;
            localStorage.setItem('Token', JSON.stringify(tokenData));
            localStorage.setItem('Role', JSON.stringify(roleData));

            if (res.data.user.role === 'student') {
                history('/')
            } else {
                history('/admin/dashboard')
            }

        } catch (error) {
            console.log(error);
        }
    }

    const handleUserLogout = async () =>{
        try {
            axios.post('http://localhost:5000/logout');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MyContext.Provider value={{ handleLoginUser , handleUserLogout}}>
            {children}
        </MyContext.Provider>
    );
};

