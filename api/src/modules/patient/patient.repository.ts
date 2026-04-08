import { PrismaModel } from "../interface/IPrismaModel";
import { BaseRepository } from "../repository/BaseRepository";
import { Patient } from "@prisma/client";   

export class PatientRepository extends BaseRepository<Patient>{
    constructor(model: PrismaModel<Patient>){
        super(model);
    }
}