// ****** Importing ****** //
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


// ****** Defining Doctor Schema ****** //
const doctorSchema = new mongoose.Schema({
  email: {
      type: String,
      required: true,
      unique: true
  },
  password: {
      type: String,
      required: true
  },
  username: {
      type: String,
      required: true
  }
}, {
  timestamps: true
});

// ****** Encrypting password using bcrypt library ****** //
doctorSchema.pre("save", async function() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

});

// ****** Sign JWT Token and return ****** //
doctorSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, 'secret', {
    expiresIn: '120m'
  });
};

// ****** Checking the bcrypt password ****** //
doctorSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const DoctorModel = mongoose.model('Doctor', doctorSchema);

// ****** Exports ****** //
export default DoctorModel;