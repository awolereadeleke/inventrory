import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const recurrentInvoiceSchema=new mongoose.Schema({
    ServiceSubscription:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"ServiceSubscription"
    },
    Invoice:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Invoice"
    },
    POC:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"POC"
    },
    From:Date,
    To: Date,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("RecurrentInvoice", recurrentInvoiceSchema)