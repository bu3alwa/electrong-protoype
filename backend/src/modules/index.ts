import { Router } from 'express';

import posts from './posts/posts.route';

const router: Router = Router();

router.use('/posts', posts);

export default router;
