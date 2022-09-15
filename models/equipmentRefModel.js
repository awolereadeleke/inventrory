import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const equipmentRefSchema=new mongoose.Schema({
    SerialNumber:StringReq,
    Equipment:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Equipment"
    },
    Store:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Store"
    },
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("EquipmentRef", equipmentRefSchema)