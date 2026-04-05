import { Router } from 'express';
import messagingRoutes from '../modules/messaging/messaging.routes';
import axios from 'axios';

const router: Router = Router();

router.use(messagingRoutes)

export default router;