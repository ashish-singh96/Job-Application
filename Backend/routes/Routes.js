import express from 'express';
import UserController from '../controller/UserController.js';

const routes = express.Router();


routes.post('/register', UserController.registerUser);
routes.post('/login', UserController.login);



export default routes;