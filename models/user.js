import { DataTypes } from "sequelize";
import {db} from "../utils/db.js";

const User = db.define("User", {
  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
  }, 
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  }
});

export default User;