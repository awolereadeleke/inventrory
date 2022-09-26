import express from 'express'
import ctrl from '../controllers/Controller.js'
import routeOptions from './Options/routeOptions.js';

const router= express.Router();
routeOptions.map((ro)=>{
    router.get(ro.Route+'/', ctrl.fill);
    router.post(ro.Route+'/', ctrl.post);
    router.get(ro.Route+'/:id', ctrl.fillBy);
    router.put(ro.Route+'/:id', ctrl.put);
    router.delete(ro.Route+'/:id', ctrl.delete);
    })
export default router;