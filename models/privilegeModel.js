import mongoose from "mongoose";
import { StringReq, DateCreated, NewDate } from "../types/models.js";


const Schema=new mongoose.Schema({
    PrivilegeName:StringReq,
    DateCreated: DateCreated,
    LastUpdate: NewDate,
})

export default mongoose.model("Privilege", Schema)