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
import InsertCompany from './Admin/InsertCompany';
import CompanyDetails from './Admin/CompanyDetails';
import RegisteredCompany from './Admin/RegisteredCompany';
import InsertJob from './Admin/InsertJob';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path='/' element={<><NavBar /><Home /></>} />
          <Route path='/register' element={<><NavBar /><Register /></>} />
          <Route path='/login' element={<><NavBar /><Login /></>} />
          <Route path='/job' element={<><NavBar /><Job /></>} />
          <Route path='/job-portal' element={<><NavBar /><JobPortal /></>} />
        </Route>
        {/* Private Routing */}
        <Route element={<PrivateRoute />}>
          <Route path='/admin/dashboard' element={<DashBoard />} />
          <Route path='/admin/insert-company' element={<><InsertCompany /><DashBoard /></>} />
          <Route path='/admin/registered-company' element={<><RegisteredCompany /><DashBoard /></>} />
          <Route path='/admin/insert-job/:id' element={<><InsertJob /><DashBoard /></>} />
          <Route path='/admin/company-details/:companyId' element={<><CompanyDetails /><DashBoard /></>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
