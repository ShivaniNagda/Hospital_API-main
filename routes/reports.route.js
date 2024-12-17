// ****** Imports ****** //

import express from 'express';
import ReportController from '../controllers/report.controller.js';
import { verifyToken } from '../config/middleware.js';
import passport from 'passport';


const reportRouter = express.Router();

const reportController = new ReportController();

// ****** Defining Routes- Create Report and Get Reports ****** //
reportRouter.get('/:status',  reportController.report_by_status);

export default reportRouter;