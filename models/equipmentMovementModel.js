import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const equipmentMovementSchema=new mongoose.Schema({
    EquipmentRef:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"EquipmentRef"
    },
    OperationType:String,
    Details:String,
    LocationAfterOperation:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Location"
    },
    LocationBeforeOperation:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Location"
    },
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("EquipmentMovement", equipmentMovementSchema)