import {PatientDTORequest, PatientDTOResponse} from "./patient.DTO";
import { UnitOfWork } from "../repository/UniteOfWork";
import { Patient } from "@prisma/client";

export class PatientService {
    constructor(private readonly _uow: UnitOfWork){}

    async createPatient(patient: PatientDTORequest): Promise<PatientDTOResponse> {
        const { companyId, ...patientData } = patient;

        const patientCreated = await this._uow.patient.create(
            {...patientData,
                company:{
                     connect:{
                        id: companyId 
                    }
                }
           } as unknown as Patient);
        return new PatientDTOResponse(patientCreated);
    }

    async getPatientById(id: string): Promise<PatientDTOResponse> {
        const patient = await this._uow.patient.findById(id);
        if (!patient) {
            throw new Error("Patient not found");
        }   
        return new PatientDTOResponse(patient);
    }

    async getAllPatients(): Promise<PatientDTOResponse[]> {
        const patients = await this._uow.patient.findAll();
        return patients.map(patient => new PatientDTOResponse(patient));
    }

    async updatePatient(id: string, patient: PatientDTORequest): Promise<PatientDTOResponse> {
        const updatedPatient = await this._uow.patient.update(id, patient as unknown as Patient);
        if (!updatedPatient) {
            throw new Error("Patient not found");
        }   
        return new PatientDTOResponse(updatedPatient);
        
    }

    async deletePatient (id: string): Promise<void> {
        const deleted = await this._uow.patient.delete(id);
        if (!deleted) {
            throw new Error("Patient not found");   
        }
    }
}