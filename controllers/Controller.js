import routeOptions from "../routes/Options/routeOptions.js";

let Controller={
    get:(req)=>{
        const Model=routeOptions.find((ro)=>ro.Route.replaceAll('/','')===req.originalUrl.split('/')[1]).Model;
        return Model;
    },
    fill:async (req, res)=>{
        const Model=Controller.get(req);
        const model= await Model.find();
        res.send(model)
        //console.log(model);
    },
    fillBy:async (req, res)=>{
        try{
            const Model=Controller.get(req);
            const id=req.params.id
            const model=await Model.findById(id);
            res.send(model)
        }catch(e){
            console.log(e.message)
            res.send({Status:"Error", Message:"Invalid ID"})
        }
    },
    post:async (req, res)=>{
        try{
            const Model=Controller.get(req);
            const model=new Model({...req.body})
            await model.save();
            res.send(model);
        }catch(e){
            res.status(403).send({Error: e.message})
            console.log(e.message);
        }
    },
    put:async (req, res)=>{
            try{
                const Model=Controller.get(req);
                const id=req.params.id
                const model=await Model.findById(id);
                Object.assign(model, req.body)
                await model.save();
                res.send(model);
            }catch(e){
                console.log(e.message)
                res.status(403).send({Error: e.message})
            }    
    },
    delete:async (req, res)=>{
        try{
            const Model=Controller.get(req);
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

export default Controller;