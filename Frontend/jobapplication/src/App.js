import './App.css';
import Home from './Component/Home';
import Job from './Component/Job';
import JobPortal from './Component/JobPortal';
import NavBar from './Component/NavBar';
import { Routes, Route } from "react-router-dom";
import Register from './Component/Register';
import Login from './Component/Login';
function App() {
  return (
    <div>
       <NavBar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/job' element={<Job/>}/>
        <Route path='/job-portal' element={<JobPortal/>}/>
       </Routes>
    </div>
  );
}

export default App;
