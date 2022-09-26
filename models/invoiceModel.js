import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate, Fee } from "../types/models.js";


const invoiceSchema=new mongoose.Schema({
    InvoiceTitle:StringReq,
    CreatedBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Staff"
    },
    Client:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Company"
    },
    Agent:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Agent"
    },
    TotalAmount:Fee,
    AgentCommission:Fee,
    InvoiceStatus:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"InvoiceStatus"
    },
    InvoiceType:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"InvoiceType"
    },
    DueDate:Date,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Invoice", invoiceSchema)