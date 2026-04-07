import { PrismaModel } from "../interface/IPrismaModel";
import { BaseRepository } from "../repository/BaseRepository";
import { Company } from "@prisma/client";

export class CompanyRepository extends BaseRepository<Company> {
    constructor(model: PrismaModel<Company>){
        super(model);
    }

}