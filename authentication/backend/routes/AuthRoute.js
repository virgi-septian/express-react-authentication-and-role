import express from "express";
import {
    logIn,
    logOut,
    me,
} from'../controllers/Auth.js';

const router = express.Router();

router.post('/login', logIn); 
router.delete('/logout', logOut); 
router.get('/me', me);

export default router;