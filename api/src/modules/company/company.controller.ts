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

    findCompanyById = async (req: Request, res: Response): Promise<Response> => {
        try{
            const { id } = req.params;
            const result = await this._companyService.getCompanyById(id.toString());
            if (!result) {
                return res.status(404).json({ error: "Company not found" });
            }
            return res.status(200).json(result);

        } catch (error: unknown) {
            console.log("Error fetching company by ID:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

        findAllCompanies = async (req: Request, res: Response): Promise<Response> => {
        console.log("Received request to fetch all companies");
        try {
            const result = await this._companyService.getAllCompanies();
            return res.status(200).json(result);
        } catch (error: unknown) {
            console.error("Error fetching all companies:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    updateCompany = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            const dto: CompanyDTORequest = req.body;
            const result = await this._companyService.updateCompany(id.toString(), dto);
            if (!result) {
                return res.status(404).json({ error: "Company not found" });
            }
            return res.status(200).json(result);
        } catch (error: unknown) {
            console.error("Error updating company:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }

    }

    deleteCompany = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            await this._companyService.deleteCompany(id.toString());
            return res.status(200).json({ message: "Company deleted successfully" });
        } catch (error: unknown) {
            console.error("Error deleting company:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

}