import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const equipmentCategoreSchema=new mongoose.Schema({
    CategoryName:StringReq,
    Details:String,
    AvailableStock:Number,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("EquipmentCategory", equipmentCategoreSchema)