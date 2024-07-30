import axios from 'axios';
import React, { createContext, useState } from 'react';
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
    const [loginUser, setLoginUser] = useState(null);
    

    const handleLoginUser = async () => {
        try {
            if (!loginUser) {
                alert('User information is missing');
                return;
            }

            axios.post('http://localhost:5000/login', loginUser);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MyContext.Provider value={{ loginUser, setLoginUser, handleLoginUser }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };
