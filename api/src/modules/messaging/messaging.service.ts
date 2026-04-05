import axios from 'axios';
import {
    SendMessageRequest,
    SendMessageResponse,
    GatewaySendMessageResponse
} from "./messaging.types";


// const WA_GATEWAY_REQUEST = process.env.WA_GATEWAY_REQUEST as string;

// export const sendMessage = async (
//     data: SendMessageRequest
// ): Promise<SendMessageResponse> => {
//     const response = await axios.post<GatewaySendMessageResponse>(
//         `${WA_GATEWAY_REQUEST}/send`,
//         data
//     );

//     return{
//         success: response.data.status === 'sent',
//     };
// };

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