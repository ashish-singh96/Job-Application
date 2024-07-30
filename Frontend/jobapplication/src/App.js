import './App.css';
import Home from './Component/Home';
import Job from './Component/Job';
import JobPortal from './Component/JobPortal';
import NavBar from './Component/NavBar';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
       <NavBar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/job' element={<Job/>}/>
        <Route path='/job-portal' element={<JobPortal/>}/>
       </Routes>
    </div>
  );
}

export default App;
