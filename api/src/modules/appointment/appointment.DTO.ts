import { AppointmentStatus, IAppoitmentDTORequest, IAppoitmentDTOResponse } from "./interfaces/IAppointment";

export class AppointmentDTORequest {
    readonly patientId: string;
    readonly startTime: Date;
    readonly endTime: Date;

    constructor(date: IAppoitmentDTORequest){
        this.patientId = date.patientId;
        this.startTime = new Date(date.startTime);
        this.endTime = new Date(date.endTime);
    }
}


export class AppointmentDTOResponse {
    readonly id: string;
    readonly patientId: string;
    readonly companuId: string;
    readonly description: string | null;
    readonly startTime: Date;
    readonly endTime: Date;
    readonly status: AppointmentStatus;
    readonly createdAt: Date;
    
    constructor(date: IAppoitmentDTOResponse){
        this.id = date.id;
        this.patientId = date.patientId;
        this.companuId = date.companyId;
        this.description = date.description;
        this.startTime = date.startTime;
        this.endTime = date.endTime;
        this.status = date.status;
        this.createdAt = date.createdAt;
    }

}

