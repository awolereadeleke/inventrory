import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const locationTypeSchema=new mongoose.Schema({
    LocationTypeName:StringReq,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("LocationType", locationTypeSchema)