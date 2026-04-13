import { Request, Response } from "express";
import { PatientService } from "./patient.service";
import { PatientDTORequest } from "./patient.DTO";

export class PatientController {
    constructor(private readonly _patientService: PatientService){}

    createPatient = async (req: Request, res: Response): Promise<Response> => {
        try {
            const dto: PatientDTORequest = req.body;
            const result = await this._patientService.createPatient(dto);
            return res.status(201).json(result);
        } catch (error: unknown) {
            console.error("Error creating patient:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        } 
    }

    findPatientById = async (req: Request, res: Response): Promise<Response> => {
        try{
            const { id } = req.params;
            const result = await this._patientService.getPatientById(id.toString());
            if (!result) {
                return res.status(404).json({ error: "Patient not found" });
            }
            return res.status(200).json(result);     
        }catch (error: unknown) {
            console.error("Error fetching patient by ID:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    findAllPatients = async (req: Request, res: Response): Promise<Response> => {
        try {
            const result = await this._patientService.getAllPatients();
            return res.status(200).json(result);
        } catch (error: unknown) {
            console.error("Error fetching all patients:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    updatePatient = async (req: Request, res: Response): Promise<Response> => {
        try {   
            const { id } = req.params;
            const dto: PatientDTORequest = req.body;
            const result = await this._patientService.updatePatient(id.toString(), dto);    

            if (!result) {
                return res.status(404).json({ error: "Patient not found" });
            } 
            return res.status(200).json(result);

        } catch (error: unknown) {
            console.error("Error updating patient:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    deletePatient = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            await this._patientService.deletePatient(id.toString());
            return res.status(204).send();
        } catch (error: unknown) {
            console.error("Error deleting patient:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }   
    }
}