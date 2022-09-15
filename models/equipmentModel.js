import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const equipmentSchema=new mongoose.Schema({
    EquipmentName:StringReq,
    EquipmentCode:StringReq,
    Details:String,
    EquipmentCategory:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"EquipmentCategory"
    },
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Equipment", equipmentSchema)