import { Appointment, Company, Patient } from "@prisma/client";
import { IBaseRepository, IBaseRepositoryAppoitment } from "./IBaseRespository";
import { CompanyDTORequest, CompanyDTOResponse } from "../company/company.DTO";

export interface IUnitOfWork {
    get company(): IBaseRepository<Company>;
    get patient(): IBaseRepository<Patient>;
    get appoitment(): IBaseRepositoryAppoitment<Appointment>;
    disconnect(): Promise<void>;
}