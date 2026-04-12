import { AppointmentController } from "../appointment.controller";
import { AppointmentService } from "../appointment.service";
import { UnitOfWork } from "../../repository/UniteOfWork";
import { prisma } from "../../../libs/database";

export const makeAppointmnetcontroller = () =>{
    const uow = new UnitOfWork(prisma);
    const appointmentService = new AppointmentService(uow);
    return new AppointmentController(appointmentService);
}