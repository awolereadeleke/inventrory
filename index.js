import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
import staffRouters from './routes/staffs.js'
import departmentRouters from './routes/departments.js';
import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_CONNEECTION, ()=>{
    console.log("Database Connected")
})



const app=express();

const PORT =process.env.PORT;

app.use(bodyParser.json());

app.use("/staffs", staffRouters)
app.use("/departments", departmentRouters)

app.get("/", (req, res)=>{
    console.log("Client Connected");
    res.send("Hello from server")
})

app.listen(PORT, () =>console.log(`Server Running on Port ${PORT}`))