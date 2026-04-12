export type AppointmentStatus = SCHEDULED | CANCELED | DONE;

export interface IAppoitmentDTORequest{
    patientId: string;
    startTime: string;
    endTime: string;
}

export interface IAppoitmentDTOResponse{
    id: string;
    patientId: string;
    companyId: string;
    description: string | null;
    startTime: Date;
    endTime: Date;
    status: AppointmentStatus;
    createdAt: Date;
}