import mongoose from "mongoose";

const staffSchema= new mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email:String,
    Phone:String,
    About: String,
    DOB: Date,
    DesignationID: Number,
    AppointmentDate: Date,
    ProfilePictureID :Number,
    DateCreated: Date,
    DepartmentID: Number,
    Roles: Number
})

export default mongoose.model("Staff", staffSchema)