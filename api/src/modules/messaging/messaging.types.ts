export interface SendMessageRequest {
    to: string;
    message: string;
}

export interface SendMessageResponse{
    success: boolean;
}

export interface GatewaySendMessageResponse {
    status: string;
}