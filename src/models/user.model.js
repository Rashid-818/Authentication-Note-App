import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unqiue: true,
            trim: true
        },
        email: {
            type: String,
            unqiue: true,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
        }
        
    },
    {timestamps: true}
)

export const User = mongoose.model('User',userSchema)