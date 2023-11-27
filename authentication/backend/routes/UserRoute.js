import express from 'express';
import {
    getUsers,
    getUserById,
    createdUser,
    updatedUser,
    deleteUser,
} from '../controllers/Users.js'

import { verifyUser, adminOnly } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/users', verifyUser, adminOnly, getUsers);
router.get('/users/:id', verifyUser, adminOnly, getUserById);
router.patch('/users/:id', verifyUser, adminOnly, updatedUser);
router.post('/users', createdUser);
router.delete('/users/:id', verifyUser, adminOnly, deleteUser);

export default router;