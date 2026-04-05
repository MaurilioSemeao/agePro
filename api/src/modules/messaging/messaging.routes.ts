import { Router } from "express";
import { MessagingController } from "./messaging.controller";

const router = Router();

const messagingController = new MessagingController();

router.post('/messages/send', messagingController.send)

export default router;