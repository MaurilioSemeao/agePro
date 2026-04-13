import { IPatientDTORequest, IPatientDTOResponse, IPatientiAppoiment } from "./interfaces/IPatient";

export class PatientDTORequest {
   readonly name: string;
   readonly phone: string;
   readonly email?: string | null; 
   readonly companyId: string;
    constructor(patient: IPatientDTORequest){
        this.name = patient.name;
        this.phone = patient.phone;
        this.email = patient.email;
        this.companyId = patient.companyId;
    }   

    get data(){
        return {
            name: this.name,
            phone: this.phone,
            email: this.email,
            companyId: this.companyId
        };
    }
}

export class PatientDTOResponse{
    readonly id: string;
    readonly name: string;
    readonly phone: string
    readonly email?: string | null;
    readonly appointments: IPatientiAppoiment[]

    constructor(patient: IPatientDTOResponse){
        this.id = patient.id;
        this.name = patient.name;
        this.phone = patient.phone;
        this.email = patient.email;
        this.appointments = patient.appointment?.map(a => ({
            id: a.id,
            startTime: a.startTime,
            endTime: a.endTime,
            status: a.status,    
        })) ?? []
    }
}