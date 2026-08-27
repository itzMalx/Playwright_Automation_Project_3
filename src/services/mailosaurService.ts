import MailosaurClient from "mailosaur";

export class MailosaurService {

    private readonly client: MailosaurClient;

    constructor() {
        this.client = new MailosaurClient(
            process.env.MAILOSAUR_API_KEY!
        );
    }

    async getOTP(email: string, receivedAfter: Date): Promise<string> {

        const message = await this.client.messages.get(
            process.env.MAILOSAUR_SERVER_ID!,
            {
                sentTo: email
            },
            {
                timeout: 60000,
                receivedAfter: receivedAfter
            }
        );

        const body = message.text?.body || "";
        const subject = message.subject || "";

        console.log("WaveInit email received");
        console.log("Subject:", message.subject);

        const otp = body.match(/\b\d{6}\b/)?.[0] || subject.match(/\b\d{6}\b/)?.[0];

        if (!otp) {
            throw new Error("6-digit OTP not found in WaveInit email");
        }

        console.log("OTP received:", otp);

        return otp;
    }
}
