import express from "express";
import router from "./routes/userRoutes.js";
import { db } from "./utils/db.js";
const app=express();
app.use(express.json())
app.use(router);
app.listen(3000)