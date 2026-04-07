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
        console.log('Received send message request with payload:', payload);
        try {
            const result = await this.messagingService.sendMessage(payload);
            console.log('Message send result:', result);
            if(!result.success){
                return res.status(400).json({
                    success: false,
                    error: 'Failed to send message through gateway',
                });
            }

            return res.status(200).json({
                success: true,
                data: result
            });

        } catch (error: unknown) {
            console.error('Error sending message:', error);
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