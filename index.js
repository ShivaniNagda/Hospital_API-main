
import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
const port = 7777;
import mongoose from 'mongoose';

import { connectUsingMongoose } from './config/mongooseConfig.js';
import passport from 'passport';
import doctorRouter from './routes/doctors.route.js';
import patientRouter from './routes/patients.route.js';
import reportRouter from './routes/reports.route.js';
// import passport from './config/passport_jwt_strategy.js';


// ****** Starting the App ****** //
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

// ****** Redirecting Routes ****** //
app.use('/api/doctors',doctorRouter );
app.use('/api/patients',patientRouter );
app.use('/api/reports',reportRouter);

app.listen(port, function (err) {
    if (err) { console.log('error'); return; } // ****** Print if error ****** //
    
    console.log(`Server Running :: Port Number - ${port}`); // ****** Else print this ****** //
    connectUsingMongoose();
});
