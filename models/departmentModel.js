import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const departmentSchema=new mongoose.Schema({
    DepartmentName:StringReq,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Department", departmentSchema)