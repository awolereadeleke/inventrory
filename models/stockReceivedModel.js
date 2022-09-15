import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const stockReceivedSchema=new mongoose.Schema({
    StockMovement:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"StockMovement"
    },
    ReceivedBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Staff"
    },
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("StockReceived", stockReceivedSchema)