import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate, Fee } from "../types/models.js";


const serviceSchema=new mongoose.Schema({
    RoleName:StringReq,
    ServiceCode:StringReq,
    Details:String,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
    SuspensionFee:Fee,
    Provider:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Provider"
    },
    CreatedBy:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Staff"
    },
    ProviderSubscriptionFee:Fee
})

export default mongoose.model("Service", serviceSchema)