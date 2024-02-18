import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance =await mongoose.connect('mongodb+srv://reejulchattaraj:Jadavpur123@cluster0.i10ipdu.mongodb.net')
        console.log('\n MongoDB connected', connectionInstance.connection.host);
        
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
        
    }
}

export default connectDB