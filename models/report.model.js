// ****** Importing ****** //
import mongoose from "mongoose";

// ****** Defining Report Schema ****** //
const reportSchema = new mongoose.Schema({
    
  doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor'
  },

  patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient'
  },

  status: {
      type: String,
      required: true,
      enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
  },
  
  date: {
      type: Date,
      default: Date.now,
     required:true,
  }
},
  {
  timestamps: true
});

// ****** Exports ****** //
const ReportModel = mongoose.model('Report', reportSchema);
export default ReportModel;