import { Request, Response } from 'express';
import { MessagingService } from './messaging.service';
import { SendMessageRequest } from './messaging.types';
import { MessagingError } from './errors/messaging.error';

export class MessagingController {
    private messagingService: MessagingService;

    constructor(){
        this.messagingService = new MessagingService();
    }

    public send = async(req: Request, res: Response): Promise<Response> =>{
        const payload: SendMessageRequest = req.body;

        try {
            const result = await this.messagingService.sendMessage(payload);

            if(!result.success){
                return res.status(400).json(result);
            }

            return res.status(200).json({
                success: true,
                to: payload.to,
                message: payload.message,
            });

        } catch (error: unknown) {
            if(error instanceof MessagingError){
                return res.status(error.statusCode).json({
                    success: false,
                    error: error.message,
                });
            };
            return res.status(500).json({
                    success: false,
                    error: 'Internal Server Error',
                }); 
        };
    };
}       