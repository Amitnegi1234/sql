import express from "express";
import { home,addUser,editUser,deleteUser } from "../controller/userController.js";
const router=express();
router.get("/",home);
router.post("/user/add",addUser);
router.put("/user/update/:id",editUser);
router.delete("/user/delete/:id",deleteUser)
export default router;