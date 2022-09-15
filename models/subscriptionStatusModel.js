import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const subscriptionStatusSchema=new mongoose.Schema({
    StatusName:StringReq,
    StatusID:Number,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("SubscriptionStatus", subscriptionStatusSchema)