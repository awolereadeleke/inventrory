import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const officeSchema=new mongoose.Schema({
    OfficeName:StringReq,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Office", officeSchema)