import express from 'express';
import { signup,singin } from '../Controller/auth.controller.js';


const router = express.Router();

router.post('/signup', signup);
router.post('/singin',singin);

export default router;
