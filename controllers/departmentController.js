import departmentModel from '../models/departmentModel.js'

let departmentController={
    fill:async (req, res)=>{
        const depts= await departmentModel.find();
        //const depts=await departmentModel.findById("6322130badc97a4fdd3cd44f");
        res.send(depts)
        console.log(depts);
    },
    fillBy:async (req, res)=>{
        try{
            const id=req.params.id
            const dept=await departmentModel.findById(id);
            res.send(dept)
            console.log(dept);    
        }catch(e){
            console.log(e.message)
            res.send({Status:"Error", Message:"Invalid ID"})
        }
    },
    post:async (req, res)=>{
        try{
            const dept=new departmentModel({...req.body})
            dept.save();
            res.send(dept);
            //res.send("POST Data");    
        }catch(e){
            console.log(e.message);
        }
    }
}


export default departmentController;