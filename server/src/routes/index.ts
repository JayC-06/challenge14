import { Router } from 'express';
import authRouter from './auth-routes.js';
import apiRouter from './api/index.js';

const router = Router();

router.use('/api', apiRouter);
router.use('/auth', authRouter);
export default router;
