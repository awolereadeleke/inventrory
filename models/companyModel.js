import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate, addressSchema } from "../types/models.js";



const companySchema= new mongoose.Schema({
    CompanyName: StringReq,
    Email:StringReq,
    Phone:{
        type:String,
        minLength:7,
        maxLength:20,
    },
    About: String,
    CompanyLogoID :Number,
    Address:addressSchema,
    Office:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Office"
    },
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Company", companySchema)