import express, { Request, Response } from "express"
import { HTTP } from "../error/mainError"
import userModel from "../model/userModel";
import cloudinary from "../config/cloudinary"
import bcrypt from "bcrypt"

export const registerUser = async(req:any, res:Response)=>{
    try {
        
        const {name, email, password, } = req.body;

        
        const salt = await bcrypt.genSalt(10);

        const harsh = await bcrypt.hash(password,salt)

        const {secure_url, public_id} = await cloudinary.uploader.upload(req.file?.path);

        const newUser = await userModel.create({
            name,
            email, 
            password:harsh,
            avatar:secure_url, 
            avataID:public_id,
        });

        return res.status(HTTP.CREATE).json({
            message: "user register",
            data: newUser
        });

    } catch (error) {
        return res.status(HTTP.BAD).json({
            message: "can't register user",
            data: error.message
        });
    }
}

export const signInUser = async(req:Request, res:Response)=>{
    try {
        const {email,password} = req.body;

        const gets = await userModel.findOne({email})
      
        
        if(gets){
        const comparism = await bcrypt.compare(password, gets?.password)

        if(comparism){
            return res.status(HTTP.CREATE).json({
                message: `welcome ${gets.name}`,
                data: gets._id
            })
        }else{
            return res.status(HTTP.BAD).json({
                message: "in correct password",
            })
        }

        }

    } catch (error) {
        return res.status(HTTP.BAD).json({
            message: "can't sign in user",
            data: error.message
        })
    }
}


export const getUsers = async(req:Request,res:Response) =>{
    try {
        const alluser = await userModel.find()
       

        return res.status(HTTP.OK).json({
            message: "gotten get users",
            data: alluser
        })
    } catch (error) {
    return res.status(HTTP.BAD).json({
        message: "can't get users",
        data: error.message
    })
    }
}

export const getOneUser = async(req:Request,res:Response) =>{
    try {
        const {userID} = req.params;
        const alluser = await userModel.findById(userID)

        return res.status(HTTP.OK).json({
            message: "gotten  user",
            data: alluser
        })
    } catch (error) {
    return res.status(HTTP.BAD).json({
        message: "can't get user",
        data: error.message
    })
    }
}

export const deleteUser = async(req:Request,res:Response)=>{
    try {

        const {userID} = req.params;
        
        const deletes = await userModel.findByIdAndDelete(userID);
        
        return res.status(HTTP.CREATE).json({
            message: "update user",
            data: deletes
        })
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message: "can't update user",
            data: error.message
        }) 
    }
}

export const updateUser = async(req:Request,res:Response)=>{
    try {
       const {userID} = req.params;
       const {name} = req.body;
       const update= await userModel.findByIdAndUpdate(userID,{name},{new: true}) 

       return res.status(HTTP.CREATE).json({
        message: " updated user",
        data: update
        })
    } catch (error) {
        return res.status(HTTP.BAD).json({
        message: "can't update user",
        data: error.message
        })
    }
}