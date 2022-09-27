import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
import routes from './routes/routes.js'
import mongoose from 'mongoose';
import Auth from './Auth.js'

mongoose.connect(process.env.DATABASE_CONNEECTION, ()=>{
    console.log("Database Connected")
})



const app=express();

const PORT =process.env.PORT;


app.use(bodyParser.json());
app.use(cors());

app.post('/signin', Auth.SignIn)
app.get('/verify', Auth.Verify, (req, res)=>{
    res.send(req.authorization)
})
app.use("/", Auth.Verify,  routes)


app.get("/", (req, res)=>{
    console.log("Client Connected");
    res.send("Hello from server")
})

app.listen(PORT, () =>console.log(`Server Running on Port ${PORT}`))