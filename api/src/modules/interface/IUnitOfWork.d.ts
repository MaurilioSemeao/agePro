import { Company } from "@prisma/client";
import { IBaseRepository } from "./IBaseRespository";
import { CompanyDTORequest, CompanyDTOResponse } from "../company/company.DTO";

export interface IUnitOfWork {
    get company(): IBaseRepository<Company>;
    disconnect(): Promise<void>;
}