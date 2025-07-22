import express from "express";
import router from "./routes/userRoutes.js";
// import { db } from "./utils/db.js";
import {db} from "./utils/db.js";
import User from "./models/user.js";
const app=express();
app.use(express.json())
app.use("/",router);

db.sync().then(()=>{
    try {
        app.listen(3000)
    } catch (error) {
        console.log(error);
    }
});
