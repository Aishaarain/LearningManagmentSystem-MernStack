import express from 'express'
import  {UpdateRoleToEducator} from '../controllers/educatorController.js';

const educatorRouter = express.Router()

// Add Educator Role
educatorRouter.get('/update-role', UpdateRoleToEducator)

export default educatorRouter;

