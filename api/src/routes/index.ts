import { Router } from 'express';
import messagingRoutes from '../modules/messaging/messaging.routes';
import { companyRouters } from '../modules/company';
import { patientRouters } from '../modules/patient';
import { appointmentRouter } from '../modules/appointment';


const router: Router = Router();

router.get('/health', (req, res) =>{
    res.json({ status: 'api ok' });
} );


router.use(messagingRoutes)
router.use(companyRouters)
router.use(patientRouters)
router.use(appointmentRouter)

export default router;