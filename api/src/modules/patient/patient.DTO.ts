import { IPatientDTORequest, IPatientDTOResponse } from "./interfaces/IPatient";

export class PatientDTORequest {
    public name: string;
    public phone: string;
    public email?: string | null; 
    public companyId: string;
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
    private id: string;
    private name: string;
    private phone: string
    private email?: string | null;
    constructor(patient: IPatientDTOResponse){
        this.id = patient.id;
        this.name = patient.name;
        this.phone = patient.phone;
        this.email = patient.email;
    }
}