import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const salesInvoiceSchema=new mongoose.Schema({
    OrderItem:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"OrderItem"
    },
    Invoice:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Invoice"
    },
    PCO:{
        type:mongoose.SchemaType.ObjectId,
        ref:"PCO"
    },
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("SalesInvoice", salesInvoiceSchema)