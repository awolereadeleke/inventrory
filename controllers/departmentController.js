import Model from '../models/departmentModel.js'

let departmentController={
    fill:async (req, res)=>{
        const model= await Model.find();
        res.send(model)
        console.log(model);
    },
    fillBy:async (req, res)=>{
        try{
            const id=req.params.id
            const model=await Model.findById(id);
            res.send(model)
            console.log(model);    
        }catch(e){
            console.log(e.message)
            res.send({Status:"Error", Message:"Invalid ID"})
        }
    },
    post:async (req, res)=>{
        try{
            const model=new Model({...req.body})
            model.save();
            res.send(model);
        }catch(e){
            console.log(e.message);
        }
    },
    put:async (req, res)=>{
            try{
                const id=req.params.id
                const model=await Model.findById(id);
                Object.assign(model, req.body)
                await model.save();
                res.send(model);
                console.log(model);    
            }catch(e){
                console.log(e.message)
                res.send({Status:"Error", Message:"Invalid ID"})
            }    
    },
    delete:async (req, res)=>{
        try{
            const id=req.params.id
            const model=await Model.findById(id);
            await model.remove();
            res.send(model);
            console.log(model);    
        }catch(e){
            console.log(e.message)
            res.send({Status:"Error", Message:"Invalid ID"})
        }    
}

}


export default departmentController;