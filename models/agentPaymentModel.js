import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate, Fee } from "../types/models.js";


const agentPaymentSchema=new mongoose.Schema({
    InvoicePayment:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"InvoicePayment"
    },
    AmountPaid:Fee,
    ConfirmedBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Staff"
    },
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("AgentPayment", agentPaymentSchema)