import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const invoiceTypeSchema=new mongoose.Schema({
    InvoiceTypeName:StringReq,
    InvoiceTypeID:Number,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("InvoiceType", invoiceTypeSchema)