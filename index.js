import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"


const app=express();
const PORT =5000;

app.use(bodyParser.json());

app.get("/", (req, res)=>{
    console.log("Client Connected");
    res.send("Hello from server")
})

app.listen(PORT, () =>console.log(`Server Running on Port ${PORT}`))