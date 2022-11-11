import express from 'express';
import { getProduct, getProductId, addProduct, updateProduct, deleteProduct } from '../controllers/Products.js';
import { verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/products', verifyUser, getProduct);
router.get('/products/:id', verifyUser, getProductId);
router.post('/products', verifyUser, addProduct);
router.put('/products/:id', verifyUser, updateProduct);
router.delete('/products/:id', verifyUser, deleteProduct);


export default router;