import express from 'express';
import UserController from '../controller/UserController.js';
import isAuthenticate from '../Middlewares/isAuthenticated.js';
import CompanyController from '../controller/CompanyController.js';
import JobController from '../controller/JobController.js';
const routes = express.Router();


routes.post('/register', UserController.registerUser);
routes.post('/login', UserController.login);
routes.post('/logout', UserController.logout);
routes.post('/profile/update', isAuthenticate, UserController.updateProfile);


routes.post('/company_insert', isAuthenticate, CompanyController.insert_company);
routes.get('/company_get', CompanyController.get_company);
routes.get('/company_get_one/:id', CompanyController.get_one_company);
routes.put('/company_update/:id', CompanyController.update_company);


routes.post('/job_insert', isAuthenticate, JobController.insert_job);

export default routes;