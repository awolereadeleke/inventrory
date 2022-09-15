import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const currencySchema=new mongoose.Schema({
    CurrencyName:StringReq,
    CurrencySymbol:String,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Currency", currencySchema)