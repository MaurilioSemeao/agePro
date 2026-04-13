import { PrismaModel } from "../interface/IPrismaModel";
import { BaseRepository } from "../repository/BaseRepository";
import { Appointment, Patient } from "@prisma/client";   

export class PatientRepository extends BaseRepository<Patient>{
    constructor(model: PrismaModel<Patient>){
        super(model);
    }

    async findByIdWithAppointments(id: string): Promise<(Patient & { appointment: Appointment[] }) | null> {
        return this._model.findUnique({
            where: { id },
            include: { appointment: true }
        }) as Promise<(Patient & { appointment: Appointment[] }) | null>;
    }

    async findAllWithAppointments(): Promise<(Patient & { appointment: Appointment[] })[]> {
        return this._model.findMany({
            include: { appointment: true }
        }) as Promise<(Patient & { appointment: Appointment[] })[]>;
    }
}
