import staffModel from '../models/staffModel.js'

let staffController={
    fill:(req, res)=>{
        res.send("This is the staff list news")
    },
    post:(req, res)=>{
        console.log(req.body);
        res.send("POST Data");
    }
}


export default staffController;