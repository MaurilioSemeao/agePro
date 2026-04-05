import { Request, Response } from "express";
import { WaSessionService } from "./wa-geteway.service";
import { CreateSessionRequest, SendMessageRequest } from "./wa-getewa.types";

export class WasessionController {
    private _service: WaSessionService = new WaSessionService();

    public createSession = (req: Request, res: Response) => {
        console.log('Creating session with payload', req.body);
        const payload: CreateSessionRequest = req.body;
        const _session = this._service.createSession(payload);
        return res.status(200).json(_session);
    };

    public getStatus = async (req: Request, res: Response) => {
        const { id } = req.params;
        console.log('Getting status for session', id);
        const _status = await this._service.getSessionStatus(id.toString());
        return res.status(200).json(_status);
    }

    public sendMessage = async (req: Request, res: Response) => {
        const payload: SendMessageRequest = req.body;
        const result = await this._service.sendMessage(payload);
        return res.status(result.success ? 200 : 400).json(result);
    }

}