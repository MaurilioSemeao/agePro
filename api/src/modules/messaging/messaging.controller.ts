import { Request, Response } from 'express';
import { MessagingService } from './messaging.service';
import { SendMessageRequest } from './messaging.types';

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

        } catch (error: any) {
            console.error('Error sending message:', error);
            return res.status(500).json({
                success: false, 
                error: error.message
            });
        };
    };
}       