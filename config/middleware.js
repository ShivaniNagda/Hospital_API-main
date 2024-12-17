import DoctorModel from "../models/doctor.model.js";
import jwt from "jsonwebtoken";
// ****** Verifying Bear Token ****** //
export const verifyToken = async (req, res, next) => {

    console.log("Bearer Token"+req.headers['authorization']);
  let token;
  
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
      console.log("TOKEN : "+token);
      req.token = token;
    }
    
    if (!token) { // ****** If Token not found ****** //
      console.log("Token Error");
      return res.status(401).json({
        success: false,
        message: "Unauthroized access"
      });
    }
  
    // ****** Try Block ****** //
    try {

      const decoded = await jwt.verify(token, 'secret'); // ****** Decode Token ****** //
      console.log("DECODED TOKEN : "+decoded);
     
      req.doctor = await DoctorModel.findById(decoded.id); // ****** Find DoctorModel by ID ****** //
      next();


    } catch (err) {  // ****** Catch Block - Error Handling ****** //
      console.log(err);
      return res.status(401).json({
        success: false,
        message: "Unauthroized access"
      });
    }
  };

