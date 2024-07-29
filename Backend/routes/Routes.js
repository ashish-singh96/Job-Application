import express from 'express';
import UserController from '../controller/UserController.js';
import isAuthenticate from '../Middlewares/isAuthenticated.js';
const routes = express.Router();


routes.post('/register', UserController.registerUser);
routes.post('/login', UserController.login);
routes.post('/logout', UserController.logout);
routes.post('/profile/update', isAuthenticate, UserController.updateProfile);



export default routes;