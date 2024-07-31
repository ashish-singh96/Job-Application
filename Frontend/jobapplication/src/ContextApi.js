import axios from 'axios';
import React, { createContext, useState } from 'react';
export const MyContext = createContext();
export const MyProvider = ({ children }) => {
    const handleLoginUser = async (loginUser) => {
        try {
            const res = await axios.post('http://localhost:5000/login', loginUser);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MyContext.Provider value={{ handleLoginUser }}>
            {children}
        </MyContext.Provider>
    );
};


