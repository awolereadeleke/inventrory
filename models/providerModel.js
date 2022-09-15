import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const providerSchema=new mongoose.Schema({
    ProviderName:StringReq,
    ServiceDescription:String,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Provider", providerSchema)