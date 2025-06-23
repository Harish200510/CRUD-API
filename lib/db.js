import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const connectDB=async()=>{
    try{

        await mongoose.connect(
            process.env.MONGODB_URI
        )
        console.log("DataBase Connected Succesfully")
    }
    catch(err){
        console.error(err.message)
        process.exit(1)
    }
}

export default connectDB;
