import { db } from "../utils/db.js";
import User from "../models/user.js";
export const home=(req,res)=>{
    res.send("jj");
}

export const addUser=async(req,res)=>{
    try {
        const {name,email}=req.body;
        const user=await User.create({
            name:name,
            email:email
        })
        res.status(201).send(`user with name ${name} created`);
    } catch (error) {
        console.log(error);
        res.status(500).send(`unable to make entry`);
    }
}

export const editUser =async(req,res)=>{
    try {
        const {id}=req.params;
        const {name,email}=req.body;
        const user=await User.findByPk(id);
        if(!user){
            return res.status(404).send("user not found");
        }
        user.name=name;
        user.email=email;
        await user.save();
        res.status(200).send("user updated");

    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }   
}

export const deleteUser=async(req,res)=>{
    try {
        const {id} =req.params;
        const user =await User.destroy({
            where:{
                id:id
            }
        })
        if(!user){
           return res.status(404).send("user not found"); 
        }
        res.status(200).send(`user with id ${id} deleted`);
    } catch (error) {
        console.log(error);
         res.status(500).send(error.message);
    }

}