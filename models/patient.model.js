// ****** Importing ****** //
import mongoose from 'mongoose';

// ****** Defining Patient Schema ****** //
const patientSchema = new mongoose.Schema({
    
  phone: {
      type: Number,
      maxlength:10,
      required: true,
      unique:true,
  },
  name: {
      type: String,
      required:true,
  },
  doctorname: {
      type: String,
      required:true,
  },
  doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Doctor'
  }
}, {
    timestamps: true
  });

// ****** Exports ****** //
const PatientModel = mongoose.model('Patient', patientSchema);
export default PatientModel;