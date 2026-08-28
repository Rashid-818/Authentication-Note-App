import mongoose from "mongoose";

const connectDB = async(req,res)=>{
    try {
        await mongoose.connect(`${process.env.MongoDB_URl}`)
        console.log("Successfully Database is connected 🎉");
        
    } catch (error) {
        console.log(`Cannot connect with DataBase !!`);
        
    }
}

export default connectDB