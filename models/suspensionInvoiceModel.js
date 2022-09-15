import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const suspensionInvoiceSchema=new mongoose.Schema({
    ServiceSubscription:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"ServiceSubscription"
    },
    Invoice:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Invoice"
    },
    PCO:{
        type:mongoose.SchemaType.ObjectId,
        ref:"PCO"
    },
    From:Date,
    To: Date,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("SuspensionInvoice", suspensionInvoiceSchema)