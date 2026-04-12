import { makeAppointmnetcontroller } from "./util/appointmentFactory";
import { Router } from "express";

const router = Router();
const appointmentController = makeAppointmnetcontroller();

router.post("/appointments", appointmentController.create);
router.get("/appointments", appointmentController.findAll);
router.get("/appointments/:id", appointmentController.findById);
router.patch("/appointments/:id/cancel", appointmentController.cancel)

export default router