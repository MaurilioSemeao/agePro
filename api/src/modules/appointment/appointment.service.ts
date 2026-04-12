import { UnitOfWork } from "../repository/UniteOfWork";
import { AppointmentDTORequest, AppointmentDTOResponse } from "./appointment.DTO";
import { Appointment, AppointmentStatus } from "@prisma/client";

export class AppointmentService {
    constructor(private readonly _uow: UnitOfWork){}

    async create(companyId: string, dto: AppointmentDTORequest): Promise<AppointmentDTOResponse> {
        const appointment = await this._uow.appoitment.create({
            ...dto,
            companyId,
        } as unknown as Appointment);
        return new AppointmentDTOResponse(appointment);
    }

    async findById(id: string): Promise<AppointmentDTOResponse> {
        const appointment = await this._uow.appoitment.findById(id);
        if(!appointment) throw new Error("Appoitment not found");
        return new AppointmentDTOResponse(appointment)
    }

    async findAll(companyId: string): Promise<AppointmentDTOResponse[]> {
        const appoitments = await this._uow.appoitment.findAllByCompany(companyId);
        return appoitments.map(a => new AppointmentDTOResponse(a));
    }

    async cancel(id: string): Promise<AppointmentDTOResponse> {
        const update = await this._uow.appoitment.updateStatus(id, AppointmentStatus.CANCELED)
        if (!update) throw new Error("Appointment not found!");
        return new AppointmentDTOResponse(update);    
    }

}