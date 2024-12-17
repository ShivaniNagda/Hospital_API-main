import express from 'express'
import PatientController from '../controllers/patient.controller.js';
import ReportController from '../controllers/report.controller.js';
import { verifyToken } from '../config/middleware.js';


const patientRouter = express.Router();
const patientController = new PatientController();
const reportController= new  ReportController();


// Patient Registration 
patientRouter.post('/register',verifyToken,patientController.register);

 
 //- /patients/:id/create_report
 patientRouter.post('/:id/create_report',verifyToken,reportController.create_report);
 patientRouter.get('/:id/all_reports',  reportController.all_report);


export default patientRouter;