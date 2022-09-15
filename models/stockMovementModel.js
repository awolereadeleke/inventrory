import mongoose, { SchemaTypes } from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const stockMovementSchema=new mongoose.Schema({
    FromStore:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Store"
    },
    ToStore:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Store"
    },
    InitiatedBy:{
        type:mongooose.SchemaTypes.ObjectId,
        ref:"Staff"
    },
    StockMovementStatus:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"StockMovementStatus"
    },
    StockReceived:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"StockReceived"
    },
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Department", stockMovementSchema)