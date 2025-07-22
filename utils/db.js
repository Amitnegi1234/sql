import { Sequelize } from "sequelize"; 
const sequelize = new Sequelize('sharpener', 'root', 'Amitnegi@123', {
    host: 'localhost',
    dialect: 'mysql'
});
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

export const db = sequelize;



















// import mysql from "mysql2";
// const connection=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Amitnegi@123",
//     database:"sharpener"
// })
// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         connection.end();
//         return;
//     }
//     console.log("connection created");

//     const createTable=`create table IF NOT EXISTS user(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(30) NOT NULL,
//         email VARCHAR(30) NOT NULL
//     )`
//     connection.execute(createTable,(err)=>{
//         if(err){
//             console.log(err);
//             connection.end();
//             return;
//         }
//         console.log("table created");
//     })
// })
// export const db=connection;
