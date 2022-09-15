import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const invoicePaymentSchema=new mongoose.Schema({
    Invoice:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Invoice"
    },
    ConfirmedBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Staff"
    },
    PaymentDate:Date,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("InvoicePayment", invoicePaymentSchema)