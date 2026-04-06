export interface SendMessageRequest {
    sessionId: string;
    to: string;
    message: string;
}

export interface SendMessageResponse{
    success: boolean;
}

export interface GatewaySendMessageResponse {
    success: boolean;
}