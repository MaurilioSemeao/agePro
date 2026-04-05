import { Router } from "express";
import { waSessionRouter } from '../modules/wa-gateway';


const router = Router();

router.get('/health', (req, res) =>{
    res.json({ status: 'wa gateway ok' });
} );


router.post('/send', (req, res)=> {
    const {to, message} = req.body;

    console.log("Mensagem recevbida para envio:");
    console.log("Para:", to);
    console.log("Mensagem:", message);

    //Mock (não enviar ainda)

    res.json({
        status:'sent',
        to,
        message,
    });

} );

router.use('/wa', waSessionRouter);

export default router;