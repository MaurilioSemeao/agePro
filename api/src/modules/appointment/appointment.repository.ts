import { Appointment, AppointmentStatus } from "@prisma/client"
import { BaseRepository } from "../repository/BaseRepository"
import { PrismaModel } from "../interface/IPrismaModel"

export class AppointmentRespository extends BaseRepository<Appointment> {
    constructor(model: PrismaModel<Appointment>){
        super(model)
    }

    async findAllByCompany(companyId: string): Promise<Appointment[]> {
        return this._model.findMany({ where: { companyId } });
    }

    async updateStatus(id: string, status: AppointmentStatus): Promise<Appointment | null> {
        return this._model.update({ where: { id }, data: { status }});
    }
}