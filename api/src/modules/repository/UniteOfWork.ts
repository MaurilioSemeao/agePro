import { Company, PrismaClient } from "@prisma/client";
import { IBaseRepository } from "../interface/IBaseRespository";
import { IUnitOfWork } from "../interface/IUnitOfWork";
import { CompanyRepository } from "../company/company.repository";
import { PatientRepository } from "../patient/patient.repository";

export class UnitOfWork implements IUnitOfWork {
    private _companyRepository: IBaseRepository<Company> | null = null;
    private _patientRepository: IBaseRepository<Patient> | null = null;



    constructor(private readonly _prisma: PrismaClient){}

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


    async disconnect(){
        this._prisma.$disconnect();
    }

}