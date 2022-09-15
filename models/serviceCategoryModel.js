import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const serviceCategorySchema=new mongoose.Schema({
    ServiceCategoryName:StringReq,
    Details:String,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("ServiceCategory", serviceCategorySchema)