import express from 'express';
import {
    getUsers,
    getUserById,
    createdUser,
    updatedUser,
    deleteUser,
} from '../controllers/Users.js'

import { verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/users', verifyUser, getUsers);
router.get('/users/:id', verifyUser, getUserById);
router.patch('/users/:id', verifyUser, updatedUser);
router.post('/users', verifyUser, createdUser);
router.delete('/users/:id', verifyUser, deleteUser);

export default router;