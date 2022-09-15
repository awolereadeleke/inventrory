import mongoose, { Mongoose } from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const orderItemSchema=new mongoose.Schema({
    EquipmentRefs:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"EquipmentRef"
    }],
    Client:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Company"
    },
    PreparedBy:{
        type:Mongoose.SchemaTypes.ObjectId,
        ref:"Staff"
    },
    SalesInvoice:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"SalesInvoice"
    },
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("OrderItem", orderItemSchema)