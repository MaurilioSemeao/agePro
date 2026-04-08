import { Router } from "express";
import { makePatientController } from "./utils/patientFactory";

const router = Router();
const patientController = makePatientController();

router.post("/patients", patientController.createPatient);
router.get("/patients", patientController.findAllPatients);
router.get("/patients/:id", patientController.findPatientById);
router.put("/patients/:id", patientController.updatePatient);
router.delete("/patients/:id", patientController.deletePatient);

export default router;