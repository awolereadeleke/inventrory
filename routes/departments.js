import express from 'express'
import departmentController from '../controllers/departmentController.js';

const router= express.Router();


router.get('/', departmentController.fill);
router.post('/', departmentController.post);
router.get('/:id', departmentController.fillBy);
export default router;