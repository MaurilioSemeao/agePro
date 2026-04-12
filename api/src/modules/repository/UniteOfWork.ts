import { Appointment, Company, Patient, Prisma, PrismaClient } from "@prisma/client";
import { IBaseRepository, IBaseRepositoryAppoitment } from "../interface/IBaseRespository";
import { IUnitOfWork } from "../interface/IUnitOfWork";
import { CompanyRepository } from "../company/company.repository";
import { PatientRepository } from "../patient/patient.repository";
import { AppointmentRespository } from "../appointment/appointment.repository";

export class UnitOfWork implements IUnitOfWork {
    private _companyRepository!: IBaseRepository<Company>;
    private _patientRepository!: IBaseRepository<Patient>;
    private _appoitmnetRepository!: IBaseRepositoryAppoitment<Appointment>;



    constructor(private readonly _prisma: PrismaClient){

    }

    get company() {
        if (!this._companyRepository) {
            this._companyRepository = new CompanyRepository(this._prisma.company);
        }

        return this._companyRepository;
    }

    get patient() {
        if (!this._patientRepository) {
            this._patientRepository = new PatientRepository(this._prisma.patient);
        }

        return this._patientRepository;

    }

    get appoitment(){
        if (!this._appoitmnetRepository){
            this._appoitmnetRepository = new AppointmentRespository(this._prisma.appointment)
        }

        return this._appoitmnetRepository;
    }


    async disconnect(){
        this._prisma.$disconnect();
    }

}