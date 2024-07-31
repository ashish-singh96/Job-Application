import './App.css';
import Home from './Component/Home';
import Job from './Component/Job';
import JobPortal from './Component/JobPortal';
import NavBar from './Component/NavBar';
import { Routes, Route } from "react-router-dom";
import Register from './Component/Register';
import Login from './Component/Login';
import PublicRoute from './Protected/PublicRoute';
import DashBoard from './Admin/DashBoard';
import PrivateRoute from './Protected/PrivateRoute';
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route element={<PublicRoute/>}>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/job' element={<Job />} />
          <Route path='/job-portal' element={<JobPortal />} />
        </Route>
        {/* //Private Routing */}
        <Route element={<PrivateRoute/>}>
          <Route path='/admin/dashboard' element = {<DashBoard/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
