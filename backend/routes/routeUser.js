import express from 'express';
import { getUsers, getUsersId, addUsers, updateUsers, deleteUsers } from '../controllers/Users.js';


const route = express.Router();

route.get('/users', getUsers);
route.get('/users/:id', getUsersId);
route.post('/users', addUsers);
route.patch('/users/:id', updateUsers);
route.delete('/users/:id', deleteUsers);


export default route;