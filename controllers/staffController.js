import staffModel from '../models/staffModel.js'

let staffController={
    fill:(req, res)=>{
        res.send("This is the staff list news")
    },
    post:async (req, res)=>{
        try{
            const staff=new staffModel({...req.body})
            //staff.save();
            res.send(staff);
            //res.send("POST Data");    
        }catch(e){
            console.log(e.message);
        }
    }
}


export default staffController;