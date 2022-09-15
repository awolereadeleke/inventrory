import mongoose from "mongoose";

const StringReq={
    type:String,
    required: true,
    lowercase:true,
    minLength:2,
    maxLength:100,
}
const NewDate={
    type:Date, 
    default: ()=> Date.now() 
}

const DateCreated={
    ...NewDate,
    immutable:true, 
}

const addressSchema= new mongoose.Schema({
    Nationality: String,
    State:String,
    LocalGovernment: String
})

const Fee=new mongoose.Schema({
    Amount: Number,
    Currency:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Currency"
    }    
})

export {StringReq, DateCreated, NewDate, addressSchema, Fee}
