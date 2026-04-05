export interface CreateSessionRequest {
    name: string;
}

export interface SessionStatusResponse{
    id: string;
    connected: boolean;
    qr?: string;
}

export interface SendMessageRequest{
    sessionId: string;
    to: string;
    message: string;
}

export interface SendMessageResponse{
    success: boolean;
}