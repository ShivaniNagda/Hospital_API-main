// ****** Importing Patient Model ****** //
import DoctorModel from "../models/doctor.model.js";
import Patient from "../models/patient.model.js";

// ****** Patient Registration ****** //
export default class PatientController {
  async register(req, res) {
    const doctor = req.doctor._id; // ****** Getting the doctor ID ****** //

    try {
      const { name, phone } = req.body; // ****** Getting name and phone from the body or input ****** //
      let patient;
      patient = await Patient.find({
        phone,
      });

      let doctorId = doctor;
      const {username} = await DoctorModel.findById(doctorId);
     
      // ****** Create patient if he doesn't already exist ****** //
      if (patient.length > 0) {
        return res.status(200).json({
          success: true,
          body: patient[0],
        });
      }

      // ****** Creating Patient ****** //
      patient = await Patient.create({
        name,
        phone,
        doctor,
        doctorname:username,
      });
      console.log( patient)
      // ****** After Patient is registered successfully ****** //
      return res.status(201).json({
        success: true,
        body: patient,
        msg: "Patient Registered Sucessfully!",
      });
    } catch (err) {
      // ****** Error Handling in the catch block ****** //
      return res.status(401).json({
        success: false,
        msg: "Error Occoured!",
      });
    }
  }
}
