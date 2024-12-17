import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const baseUrl = process.env.MONGODB || '0.0.0.0:27017';

export const connectUsingMongoose = async () => {
    try {
        await mongoose.connect(`mongodb://${baseUrl}/Hospital_API` , {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err);
    }
}