import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userRegister, setUserRegister] = useState({
    fullName: "",
    email: "",
    role: "",
    password: "",
    phone: "",
  });

  const resetData = () => {
    setUserRegister({
      fullName: "",
      email: "",
      role: "",
      password: "",
      phone: "",
    })
  }

  const [responseMessage, setResponseMessage] = useState("");


  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setUserRegister({ ...userRegister, [name]: value });
  }

  const handleRegister = async () => {
    try {
      const { fullName, email, role, phone, password } = userRegister;

      if (!fullName || !email || !phone || !role || !password) {
        setResponseMessage("Something is missing");
        return;
      }

      await axios.post('http://localhost:5000/register', userRegister);
      setResponseMessage("Registered your account successfully.");
      resetData();
    } catch (error) {
      setResponseMessage(error.message);
    }
  };

  return (
    <>
      <div>
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="hidden lg:block lg:w-1/2 bg-cover bg-center rounded-l-lg"
                style={{
                  backgroundImage: 'url("../../Images/register.jpg")',
                }}
              />
              {/* Form Column */}
              <div className="w-full lg:w-1/2 shadow-2xl p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                  Register an Account!
                </h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        name='fullName'
                        onChange={handleChangeRegister}
                        value={userRegister.fullName}
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="phone"
                      >
                        Mobile Number
                      </label>
                      <input
                        name='phone'
                        onChange={handleChangeRegister}
                        value={userRegister.phone}
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="number"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      name='email'
                      onChange={handleChangeRegister}
                      value={userRegister.email}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      onChange={handleChangeRegister}
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      name='password'
                      value={userRegister.password}
                      placeholder="******************"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="role"
                    >
                      Role
                    </label>
                    <div className="flex flex-row gap-10">
                      <div className="relative flex items-center">
                        <input
                          className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-blue-600 checked:bg-blue-200 checked:hover:border-blue-600 checked:hover:bg-blue-300 focus:outline-none checked:focus:border-blue-700 checked:focus:bg-blue-400 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                          type="radio"
                          id="student"
                          name="role"
                          value="student"
                          onChange={handleChangeRegister}
                          checked={userRegister.role === "student"}
                        />
                        <label
                          className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                          htmlFor="student"
                        >
                          Student
                        </label>
                        <svg
                          className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-emerald-500 peer-checked:scale-100 peer-checked:opacity-100 peer-hover:fill-emerald-600 peer-focus:fill-emerald-700 peer-disabled:cursor-not-allowed"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-labelledby="title-01 description-01"
                          role="graphics-symbol"
                        >
                          <circle cx={8} cy={8} r={4} />
                        </svg>
                      </div>
                      <div className="relative flex items-center">
                        <input
                          className="w-4 h-4 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer focus-visible:outline-none peer border-slate-500 checked:border-blue-600 checked:bg-blue-200 checked:hover:border-blue-600 checked:hover:bg-blue-300 focus:outline-none checked:focus:border-blue-700 checked:focus:bg-blue-400 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
                          type="radio"
                          id="recruiter"
                          name="role"
                          value="recruiter"
                          onChange={handleChangeRegister}
                          checked={userRegister.role === "recruiter"}
                        />
                        <label
                          className="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
                          htmlFor="recruiter"
                        >
                          Recruiter
                        </label>
                        <svg
                          className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-emerald-500 peer-checked:scale-100 peer-checked:opacity-100 peer-hover:fill-emerald-600 peer-focus:fill-emerald-700 peer-disabled:cursor-not-allowed"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-labelledby="title-02 description-02"
                          role="graphics-symbol"
                        >
                          <circle cx={8} cy={8} r={4} />
                        </svg>
                      </div>
                    </div>

                    {responseMessage && <p class="text-xs italic text-blue-600">{responseMessage}</p>}
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={handleRegister}
                    >

                      Register Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <span
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      
                    >
                      Forgot Password?
                    </span>
                  </div>
                  <div className="text-center">
                    <span
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      
                    >
                      Already have an account? <Link to={'/login'}>Login</Link>!
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
