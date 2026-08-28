import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const connectionInstance  = await mongoose.connect(`${process.env.MongoDB_URL}`)
        console.log(connectionInstance.connection.host);
        console.log(process.env.MongoDB_URL);
        
        console.log("Successfully Database is connected 🎉");
        
    } catch (error) {
        console.log(`Cannot connect with DataBase !!`);
        
    }
}

export default connectDB