import axios from 'axios';
import {
    SendMessageRequest,
    SendMessageResponse,
    GatewaySendMessageResponse
} from "./messaging.types";

export class MessagingService{
    private gatewayUrl: string;

    constructor(){
        this.gatewayUrl = process.env.WA_GATEWAY_REQUEST || "http://localhost:3001";
    };

    public async sendMessage(payload: SendMessageRequest): Promise<SendMessageResponse>{
        const response = await axios.post<GatewaySendMessageResponse>(
            `${this.gatewayUrl}/send`, payload
        );
        console.log('Resposta do gateway:', response.data);
        return {
         success: response.data.status === 'sent'  ,  
        };
    };
};