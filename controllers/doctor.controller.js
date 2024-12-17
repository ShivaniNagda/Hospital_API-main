// ****** Importing Dependencies ****** //
import Doctor from '../models/doctor.model.js';
import jwt from 'jsonwebtoken';


// ****** Doctor Registration ****** //
export default class DoctorController{

  //================= register =================
  async register(req,res){
    try {
      console.log(req.body);
      const doctor =  await Doctor.create(req.body);
        
        return res.status(200).json({ // ****** If Doctor registration is successful ****** //
            success: true,
            message:doctor
        });
  
    } catch (err) { // ****** Error Handling ****** //
        return res.status(500).json({
            success: false,
            message:err.message
        });
    }
}
// ****** Doctor Login ****** //

// ****** Doctor Signing In ****** //
async login(req,res){
  try {

    let { email, password } = req.body;

    if (!email || !password) { // ****** If email or password are not entered ****** //
      return res.status(400).json({ 
        success: false,
        msg:'No email or password'
      });
    }

    let doctor = await Doctor.findOne({ email: email });
    if (!doctor) { // ****** If Doctor not found ****** //
      return res.status(401).json({ 
        success: false, 
        msg: "Invalid Username or Password!" 
      });
    }

    // ****** Checking if the passwords matches ****** //
    const isMatch = await doctor.matchPassword(password);
    // ****** Password Invalid - Error Handling ****** //
    if (!isMatch) {
      return res.status(401).json({ 
        success: false, 
        msg: "Invalid Username or Password!" 
      });
    }

    // ****** Getting the JWT Token ****** //
    const token = doctor.getSignedJwtToken();

    // ****** Return Response ****** //
    res.status(200).json({
      success: true,
      token,
      msg: `Log In Sucessful! Keep the Token safely  ${doctor.username}!`
    });

  } catch (error) { // ****** Error Handling in the catch block ****** //
    console.log(error);
    res.status(400).json({
      success: false,
      msg:'Error Occoured!'
    });
  }
}
  
}
