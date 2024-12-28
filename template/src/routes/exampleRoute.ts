import { greetingController } from '@/controller/exampleController';
import { Router } from 'express';

const router = Router();

const userRoutes = router.get('/users', greetingController);

export default userRoutes;