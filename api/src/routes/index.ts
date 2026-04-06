import { Router } from 'express';
import messagingRoutes from '../modules/messaging/messaging.routes';


const router: Router = Router();

router.use(messagingRoutes)

export default router;