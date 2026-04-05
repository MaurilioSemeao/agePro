import axios from 'axios';
import {
    SendMessageRequest,
    SendMessageResponse,
    GatewaySendMessageResponse
} from "./messaging.types";
import { MessagingError } from './errors/messaging.error';


export class MessagingService{
    private gatewayUrl: string;

    constructor(){
        this.gatewayUrl = process.env.WA_GATEWAY_REQUEST || "http://localhost:3001";
    };

    public async sendMessage(payload: SendMessageRequest): Promise<SendMessageResponse>{
        try{
            const response = await axios.post<GatewaySendMessageResponse>(
            `${this.gatewayUrl}/send`, payload
        );

        if(response.data.status !== 'sent'){
            throw new MessagingError('Failed to send message through gateway', 400);
        }

        return {
         success: response.data.status === 'sent'  ,  
        };

        }catch(err: unknown){
            if(axios.isAxiosError(err)){
                throw new MessagingError(err.message, err.response?.status || 500);
            }
            throw new MessagingError('An unexpected error occurred', 500);
        }


        
        
    };
};