// ****** Imports ****** //

import express from 'express';
import DoctorController  from '../controllers/doctor.controller.js';
// ****** Defining Routes ****** //

const doctorRouter = express.Router();

const doctorController = new DoctorController();

// ****** Defining Routes  - Doctor Registration and Login ****** //
doctorRouter.post('/register',doctorController.register);
doctorRouter.get('/login', doctorController.login);

export default doctorRouter;