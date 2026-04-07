import { CompanyController } from "../company.controller";
import { CompanyService } from "../company.service";
import { UnitOfWork } from "../../repository/UniteOfWork";
import { prisma } from "../../../libs/database";

export const makeCompanyController = () => {
    const uow = new UnitOfWork(prisma);
    const companyService = new CompanyService(uow);
    return new CompanyController(companyService);  
}