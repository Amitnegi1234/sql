import { db } from "../utils/db.js";
export const home=(req,res)=>{
    res.send("jj");
}

export const addUser=(req,res)=>{
    const {name,email}=req.body;
    const addQuery=`insert into user (name,email) values(?,?)`;

    db.execute(addQuery,[name,email],(err)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log(`user added`);
        res.status(200).send(`user with name ${name} is inserted`)
    })
}

export const editUser =(req,res)=>{
    const {id}=req.params;
    const {name,email}=req.body;
    const editQuery=`update user set name=?,email=? where id=?`;

    db.execute(editQuery,[name,email,id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows==0){
            res.status(404).send("student not found");
            return
        }
        console.log("user updated");
        res.status(200).send(`user with id ${id} updated`);
    })
}

export const deleteUser=(req,res)=>{
    const {id} =req.params;
    const delQuery=`delete from user where id=?`;
    db.execute(delQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        if(result.affectedRows==0){
            res.status(404).send("student not found");
            return
        }
        console.log("user deleted");
        res.status(200).send(`user with id ${id} deleted`);
    })
}