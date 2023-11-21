import express from "express";
import {
    getProductById,
    getProducts,
    createdProduct,
    updatedProduct,
    deleteProduct,
} from '../controllers/Products.js'
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/products',verifyUser, getProducts);
router.get('/products/:id',verifyUser, getProductById);
router.post('/products',verifyUser, createdProduct);
router.patch('/products/:id',verifyUser, updatedProduct);
router.delete('/users',verifyUser, deleteProduct);

export default router;