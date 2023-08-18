import mongoose from "mongoose";


export interface iUser{
    name: string,
    email: string,
    password: string,
    avatar: string,
    avatarID: string
}

interface iUserData extends iUser,  mongoose.Document{}

const userModel = new mongoose.Schema({
        name:{
            type: String,
        require: true,
        },

        email:{
            type: String,
        require: true,
        trim: true
        },

        password:{
            type: String,
            require: true,
        },
        avatar:{
            type: String,
            
        },
        avatarID:{
            type: String,
        },
},{timestamps: true}
)

export default mongoose.model<iUserData>("users", userModel)