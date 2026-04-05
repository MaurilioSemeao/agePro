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
    private _sessionStatus: Map<string, boolean> = new Map();

    public createSession (payload: CreateSessionRequest): SessionStatusResponse{

        if(this._sessions.has(payload.name)) {
            throw new Error(`Session with name ${payload.name} already exists`);
        }

        const client = new Client({
            authStrategy: new LocalAuth({clientId: payload.name}),
            puppeteer:{headless: true},
        });
        client.initialize();

        this._sessions.set(payload.name, client);
        this._sessionStatus.set(payload.name, false);

        client.on('qr', (qr) => {
            console.log('scan this QR:');
            qrcode.generate(qr, { small: true});
        });
        client.on('ready', () => {
            console.log(`Session ${payload.name} ready`)
            this._sessionStatus.set(payload.name, true);
        });
        client.on('authenticated', () => console.log(`Session ${payload.name} authenticated`));
        client.on('auth_failure', () => console.error(`Session ${payload.name} auth failure:`));
        client.on('disconnected', () => {
            console.log(`Session ${payload.name} disconnected`);
            this._sessionStatus.set(payload.name, false);
        });
        return { id: payload.name, connected: false };
    };


    public async getSessionStatus(sessionId: string):Promise<SessionStatusResponse>{
        const client = this._sessions.get(sessionId);
        const connected = this._sessionStatus.get(sessionId) || false;

        return {
            id: sessionId,
            connected,
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