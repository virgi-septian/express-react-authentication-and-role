import express from "express";

import {
    getProductById,
    getProducts,
    createdProduct,
    updatedProduct,
    deleteProduct,
} from '../controllers/Products.js'

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createdProduct);
router.patch('/products/:id', updatedProduct);
router.delete('/users', deleteProduct);

export default router;