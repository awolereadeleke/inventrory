import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const roleSchema=new mongoose.Schema({
    RoleName:StringReq,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Role", roleSchema)