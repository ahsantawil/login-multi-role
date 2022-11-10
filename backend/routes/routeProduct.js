import express from 'express';
import { getProduct, getProductId, addProduct, updateProduct, deleteProduct } from '../controllers/Products.js';

const route = express.Router();

route.get('/products', getProduct);
route.get('/products/:id', getProductId);
route.post('/products', addProduct);
route.put('/products/:id', updateProduct);
route.delete('/products/:id', deleteProduct);


export default route;