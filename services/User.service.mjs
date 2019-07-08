import Express from 'express';
import { login, register } from '../controllers/User.controller.mjs';

const router = Express.Router();

router.post('/user/login', login);
router.post('/user/register', register);

export default router;
