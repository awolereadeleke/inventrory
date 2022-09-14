import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
import staffRouters from './routes/staffs.js'
import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/InvoicingSystem", ()=>{
    console.log("Database Connected")
})



const app=express();

const PORT =5000;

app.use(bodyParser.json());

app.use("/staffs", staffRouters)

app.get("/", (req, res)=>{
    console.log("Client Connected");
    res.send("Hello from server")
})

app.listen(PORT, () =>console.log(`Server Running on Port ${PORT}`))