import User from "../Models/user.model";
import bcrypt from 'bcryptjs';
import { errorHandle } from "../utills/error";

export const  singup=async(res,req)=>{
 const {username,email,password}=req.body;
 const hashpassword=bcryptjs.hashSync(password,10);
 const newUser=new User({username,email,password:hashpassword});
 try{
     await newUser.save();
     res.status(201).json({message:"User is create successfully "});

 }catch(error){
    next(errorHandle(300,"something went wrong"));

 }
}