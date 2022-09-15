import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const stockMovementStatusSchema=new mongoose.Schema({
    StockMovementStatusName:StringReq,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("StockMovementStatus", stockMovementStatusSchema)