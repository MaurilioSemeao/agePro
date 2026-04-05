import { Router } from "express";
import { WasessionController } from "./wa-geteway.controller";

const router = Router();
const controller = new WasessionController();

router.get('/sessions/:id', controller.getStatus);
router.post('/sessions', controller.createSession);
router.post('/messages/send', controller.sendMessage);

export default router;  