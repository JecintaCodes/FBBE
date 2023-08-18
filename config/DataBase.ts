import mongoose from "mongoose";
import { envVariables } from "./envVariables";


const Data = envVariables.DATABASE!

export const DB= async()=>{
    try {
        mongoose.connect(Data).then(()=>{
            console.log("connected")
        })
    } catch (error) {
        console.log(error)
    }
}