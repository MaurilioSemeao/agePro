import { Request, Response } from "express";
import { AppointmentDTORequest } from "./appointment.DTO";
import { AppointmentService } from "./appointment.service";


export class AppointmentController {
    constructor(private readonly _appointmentService: AppointmentService){}


    create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { companyId, ...rest } = req.body;
            const dto = new AppointmentDTORequest(rest);
            const createdDto = await this._appointmentService.create(companyId, dto);
            return res.status(201).json(createdDto);

        } catch (error: unknown){
            console.error("Error creating appointment:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    findById = async (req: Request, res: Response): Promise<Response> => {
        try{
            const { id } = req.params;
            const result = await this._appointmentService.findById(id.toString());
            return res.status(200).json(result);
        } catch (error: unknown){
            console.error("Error fetching appointment by ID:", error);
            return res.status(404).json({ error: "Appointment not found" });
        }
    }

    findAll = async (req: Request, res: Response): Promise<Response> => {
        try{
            const { companyId } = req.query as { companyId: string }
            const result = await this._appointmentService.findAll(companyId);
            return res.status(200).json(result);
        } catch (error: unknown) {
            console.error("Error fetching all appointments:", error)
            return res.status(500).json({ error: "Internal Server Error" })
        }
    }

    cancel = async (req: Request, res: Response): Promise<Response> => {
        try{
            const { id } = req.params
            const result = await this._appointmentService.cancel(id.toString());
            return res.status(200).json(result)
        } catch (error: unknown){
            console.error("Error cancelling appointment:", error)
            return res.status(404).json({ error: "Appointment not found" })
        }
    }

}