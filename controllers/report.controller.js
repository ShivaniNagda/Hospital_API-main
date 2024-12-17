// ****** Importing Models ****** //
import Doctor from '../models/doctor.model.js';
import Patient from '../models/patient.model.js';
import Report from '../models/report.model.js';

export default class ReportController{

// =================================== Create New Report ===================== //
  async create_report(req,res){
    console.log("Inside report controller");
  
    // ****** Getting the Doctor ID ****** //
    const doctor =req.doctor._id;
  
   try{
      console.log("Inside try");
      // ****** Creating the report ****** //
      const report = await Report.create({
        doctor:doctor,
        patient:req.params.id,
        status:req.body.status
      });
  
      return res.status(200).json({
        success:true,msg:"Report Created Successfully"
      });
   }
   catch (err) {
    // ****** Error Handling in the catch block ****** //
    return res.status(401).json({
      success: false,
      msg:err.message,
    });
  }
  }

  // ****** Find Patient by ID and send his report ****** //
  async all_report(req,res){
    try{
     const reports = Report.find({ "patient": req.params.id });
     reports.exec(function (err, report) {
       return res.send(report);
   })
    }
    catch (err) {
     // ****** Error Handling ****** //
     return res.status(401).json({
       success: false,
       msg:err.message,
     });
   }
   
 }
  //****** Send Report By Status ****** //
async report_by_status(req,res){

  try {
      const reports = Report.find({ "status": req.params.status });
      reports.exec(function (err, rep) {
          return res.send(rep);
      });

  } catch (err) { 
      return res.status(500).json({
          message: err.message
      });
  }}
}






