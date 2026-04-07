import { Company, PrismaClient } from "@prisma/client";
import { IBaseRepository } from "../interface/IBaseRespository";
import { IUnitOfWork } from "../interface/IUnitOfWork";
import { CompanyDTOResponse } from "../company/company.DTO";
import { CompanyRepository } from "../company/company.repository";

export class UnitOfWork implements IUnitOfWork {
    private _companyRepository: IBaseRepository<Company> | null = null;


    constructor(private readonly _prisma: PrismaClient){}

    get company() {
        if (!this._companyRepository) {
            this._companyRepository = new CompanyRepository(this._prisma.company);
        }

        return this._companyRepository;
    }


    async disconnect(){
        this._prisma.$disconnect();
    }

}