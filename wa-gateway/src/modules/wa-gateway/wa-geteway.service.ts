import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal"
import {
    CreateSessionRequest,
    SessionStatusResponse,
    SendMessageRequest,
    SendMessageResponse 
}from "./wa-getewa.types";


export class WaSessionService{
    private _sessions: Map<string, Client> = new Map();

    public createSession (payload: CreateSessionRequest): SessionStatusResponse{
        const client = new Client({
            authStrategy: new LocalAuth({clientId: payload.name}),
            puppeteer:{headless: true},
        });
        client.initialize();
        this._sessions.set(payload.name, client);
        client.on('qr', (qr) => {
            console.log('scan this QR:');
            qrcode.generate(qr, { small: true });
        });
        client.on('ready', () => console.log(`Session ${payload.name} ready`));
        return { id: payload.name, connected: false };
    };


    public async getSessionStatus(sessionId: string):Promise<SessionStatusResponse>{
        const client = this._sessions.get(sessionId);
        const state = client ? await client.getState() : null;

        return {
            id: sessionId,
            connected: state === 'CONNECTED',
            qr: client ? undefined : 'Session not found',
        }
    }

    public async sendMessage(payload: SendMessageRequest): Promise<SendMessageResponse>{
        const client = this._sessions.get(payload.sessionId);
        if(!client) return { success: false };

        try{
            await client.sendMessage(payload.to, payload.message);
            return { success: true };
        } catch {
            return { success: false };
        }

    }

}