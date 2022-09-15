import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const stockMovementListSchema=new mongoose.Schema({
    EquipmentRef:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"EquipmentRef"
    },
    StockMovement:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"StockMovement"
    },
    StockMovementStatus:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"StockMovementStatus"
    },
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("StockMovementList", stockMovementListSchema)