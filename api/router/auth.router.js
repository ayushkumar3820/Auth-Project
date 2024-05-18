import express from 'express';
import { singup } from '../Controller/auth.controller.js';
const router=express.Router();

router.post('/singup',singup);
