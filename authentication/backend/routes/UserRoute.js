import express from 'express';
import {
    getUsers,
    getUserById,
    createdUser,
    updatedUser,
    deleteUser,
} from '../controllers/Users.js'

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users/create', createdUser);
router.patch('/users/:id', updatedUser);
router.delete('/users/:id', deleteUser);

export default router;