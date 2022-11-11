import express from 'express';
import { getUsers, getUsersId, addUsers, updateUsers, deleteUsers } from '../controllers/Users.js';
import { verifyUser, adminOnly } from '../middleware/AuthUser.js';


const router = express.Router();

router.get('/users',verifyUser, adminOnly, getUsers);
router.get('/users/:id', verifyUser, adminOnly, getUsersId);
router.post('/users', verifyUser, adminOnly, addUsers);
router.patch('/users/:id', verifyUser, adminOnly, updateUsers);
router.delete('/users/:id', verifyUser, adminOnly,deleteUsers);


export default router;