import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const invoiceStatusSchema=new mongoose.Schema({
    StatusID:Number,
    StatusName:StringReq,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("InvoiceStatus", invoiceStatusSchema)