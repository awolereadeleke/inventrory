import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate, addressSchema } from "../types/models.js";


const staffSchema= new mongoose.Schema({
    Firstname: StringReq,
    Lastname: StringReq,
    Email:{
        type:String,
        minLength:2,
        maxLength:50,
        validate: {
            validator: v=>v.indexOf('@') > 2,
            message: props => `${props.value} failed validation test for email`,
        },
    },
    Phone:{
        type:String,
        minLength:7,
        maxLength:20,
        validate: {
            validator: v=>v.length > 9,
            message: props => `${props.value} failed validation test for phone number`,
        }
    },
    Password:{
        type:String,
        validate: {
            validator: v=>v.length > 7,
            message: props => `${props.value} cannot be less that 8 characher length`,
        }
    },
    About: String,
    DOB: Date,
    AppointmentDate: Date,
    DesignationID: {
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Designation"
    },
    ProfilePicture :{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Picture"
    },
    DepartmentID: {
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Department"
    },
    Roles: {
        type:mongoose.SchemaTypes.ObjectId, 
        ref:"Role"
    },
    Office:{
        type:mongoose.SchemaTypes.ObjectId, 
        ref:"Office"
    },
    Address:addressSchema,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Staff", staffSchema)