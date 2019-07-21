import Express from 'express';
import {
  getAllUsers,
  login,
  register,
} from '../controllers/User.controller.mjs';

const router = Express.Router();

router.get('/users', getAllUsers);
router.post('/user/login', login);
router.post('/user/register', register);

export default router;
