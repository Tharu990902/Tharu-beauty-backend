import { updateUser , deleteUser , getUser , getAllUsers  } from "../controllers/user.controller.js";
import express from 'express';

const router = express.Router();

router.get('/', getAllUsers);
router.put('/:id' , updateUser);
router.get('/:id', getUser);
router.delete('/:id' , deleteUser);



export default router;
