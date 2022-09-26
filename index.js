import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
import routes from './routes/routes.js'
import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_CONNEECTION, ()=>{
    console.log("Database Connected")
})



const app=express();

const PORT =process.env.PORT;

app.use(bodyParser.json());

app.use("/", routes)


app.get("/", (req, res)=>{
    console.log("Client Connected");
    res.send("Hello from server")
})

app.listen(PORT, () =>console.log(`Server Running on Port ${PORT}`))