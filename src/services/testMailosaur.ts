import MailosaurClient from "mailosaur";
import dotenv from "dotenv";

dotenv.config({
    path: "env/url.env"
});

const client = new MailosaurClient(
    process.env.MAILOSAUR_API_KEY!
);

async function testMailosaur() {

    console.log("Server ID:", process.env.MAILOSAUR_SERVER_ID);
    console.log("Test Email:", process.env.MAILOSAUR_EMAIL);

    try {

        const message = await client.messages.get(
            process.env.MAILOSAUR_SERVER_ID!,
            {
                sentTo: process.env.MAILOSAUR_EMAIL!
            },
            {
                timeout: 60000
            }
        );

        console.log("Email received!");
        console.log("Subject:", message.subject);
        console.log("From:", message.from?.[0]?.email);
        console.log("Body:", message.text?.body);

    } catch (error) {

        console.error("Mailosaur Error:");
        console.error(error);

    }
}

testMailosaur();