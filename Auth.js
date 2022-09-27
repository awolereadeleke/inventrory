import jwt from 'jsonwebtoken'
import staffModel from './models/staffModel.js';

const Auth={
    SignIn:async (req, res)=>{
        if(!req.body.Email || !req.body.Password){
        if(req.body.Email === null)res.status(403).send({Error:'Email cannot be null'})
        if(req.body.passwword === null)res.status(403).send({Error:'passwword cannot be null'})
        res.send({Error:'Email is null'})
        }else{
            const staff= await staffModel.findOne({Email:req.body.Email});
            if(staff !== null){
                if(staff.Password === req.body.Password){
                    const tk={id:staff._id}  
                    const aut={Email:staff.Email, Phone:staff.Phone}      
                    const token=jwt.sign(tk, 'my_key1234')
                    const authorization=jwt.sign(aut, staff.Password)
                    res.send({token, authorization})
                }else{
                    res.status(403).send({Error:'Authentication Failed'})
                }
            }else{
                res.status(403).send({Error:'Authentication Failed'})
            }
    
        }

        },
    Verify:async (req,res, next)=>{
        const headerAuth=req.headers["authorization-key"]
        const headerToken=req.headers["token"]
        if(headerAuth && headerToken){
            const decodedToken=jwt.verify(headerToken, 'my_key1234')
            if(decodedToken.id){
                const staff= await staffModel.findById(decodedToken.id);
                const decodedAuth=jwt.verify(headerAuth, staff.Password)
                if(staff.Email===decodedAuth.Email && staff.Phone===decodedAuth.Phone){
                    req.authorization=staff;
                    next()
                }else{
                    res.sendStatus(403);
                }
            }
            else{
                res.sendStatus(403);
            }
        }else{
            res.sendStatus(403);
        }
    }
}

export default Auth;