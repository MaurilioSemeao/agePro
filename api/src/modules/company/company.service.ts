import { CompanyDTORequest, CompanyDTOResponse } from "./company.DTO";
import { UnitOfWork } from "../repository/UniteOfWork";
import { Company } from "@prisma/client";


export class CompanyService {

    constructor(private readonly _uow: UnitOfWork){}

    async createCompany(company: CompanyDTORequest): Promise<CompanyDTOResponse> {
        const companyCreated = await this._uow.company.create(company as unknown as Company);
        return new CompanyDTOResponse(companyCreated);  
    }

    async getCompanyById(id: string): Promise<CompanyDTOResponse> {
        const company = await this._uow.company.findById(id);
        if (!company) {
            throw new Error("Company not found");
        }   
        return new CompanyDTOResponse(company);
    }

    async getAllCompanies(): Promise<CompanyDTOResponse[]> {
        console.log("Fetching all companies from the database...");
        const companies = await this._uow.company.findAll();
        return companies.map(company => new CompanyDTOResponse(company));
    }

    async updateCompany(id: string, company: CompanyDTORequest): Promise<CompanyDTOResponse> {
        const updatedCompany = await this._uow.company.update(id, company as unknown as Company);
        if (!updatedCompany) {
            throw new Error("Company not found");
        }   
        return new CompanyDTOResponse(updatedCompany);
    }

    async deleteCompany (id: string): Promise<void> {
        const deleted = await this._uow.company.delete(id);
        if (!deleted) {
            throw new Error("Company not found");   
        }
    }

}