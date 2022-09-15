import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate, Fee } from "../types/models.js";


const serviceSchema=new mongoose.Schema({
    RoleName:StringReq,
    ServiceCode:StringReq,
    ServiceCategory:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"ServiceCategory"
    },
    Details:String,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
    SuspensionFee:Fee,
    SubscriptionFee:Fee,
    Provider:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Provider"
    },
    CreatedBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Staff"
    },
    ProviderFee:Fee
})

export default mongoose.model("Service", serviceSchema)