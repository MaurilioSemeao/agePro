import { Request, Response } from "express";
import { CompanyService } from "./company.service";
import { CompanyDTORequest, CompanyDTOResponse } from "./company.DTO";


export class CompanyController {

    constructor(private readonly _companyService: CompanyService){}

    createCompany = async (req: Request, res: Response): Promise<Response> => {
        try {

            const dto: CompanyDTORequest = req.body;
            const result = await this._companyService.createCompany(dto);
            return res.status(201).json(result);

        } catch (error: unknown) {

            console.error("Error creating company:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

}