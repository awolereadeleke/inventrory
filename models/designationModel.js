import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const designationSchema=new mongoose.Schema({
    DesignationName:StringReq,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Designation", designationSchema)