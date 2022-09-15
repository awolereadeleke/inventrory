import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate, Fee } from "../types/models.js";


const ssSchema=new mongoose.Schema({
    Service:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Service"
    },
    SubscriptionFee:Fee,
    SubscriptionStatus:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"SubscriptionStatus"
    },
    Client:{
        type:mongooose.SchemaTypes.ObjectId,
        ref:"Company"
    },
    Agent:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Agent"
    },
    AgentCommission:Fee,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("ServiceSubscription", ssSchema)