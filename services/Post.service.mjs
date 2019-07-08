import Express from 'express';
import auth from '../auth/index';
import { index, add, remove } from '../controllers/Post.controller.mjs';

const router = Express.Router();

router.get('/posts', index);
router.get('/posts/:type', index);
router.post('/posts', auth, add);
router.delete('/posts/:id', auth, remove);

export default router;
