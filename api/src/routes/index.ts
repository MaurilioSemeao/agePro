import { Router } from 'express';
import messagingRoutes from '../modules/messaging/messaging.routes';
import { companyRouters } from '../modules/company';


const router: Router = Router();

router.get('/health', (req, res) =>{
    res.json({ status: 'api ok' });
} );


router.use(messagingRoutes)
router.use(companyRouters)

export default router;