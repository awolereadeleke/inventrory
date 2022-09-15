import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate, addressSchema } from "../types/models.js";


const contactPersonSchema= new mongoose.Schema({
    Firstname: StringReq,
    Lastname: StringReq,
    Email:StringReq,
    Phone:[{
        type:String,
        minLength:7,
        maxLength:20,
        validate: {
            validator: v=>v.length % 2 ===0,
            message: props => `${props.value} failed validation test`,
        }
    }],
    Company:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Company"
    },
    Designation:String,
    About: String,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("ContactPerson", contactPersonSchema)