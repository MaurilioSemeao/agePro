import { PatientController } from "../patient.controller";
import { PatientService } from "../patient.service";
import { UnitOfWork } from "../../repository/UniteOfWork";
import { prisma } from "../../../libs/database";

export const makePatientController = () => {
    const uow = new UnitOfWork(prisma);
    const patientService = new PatientService(uow);
    return new PatientController(patientService);  
}