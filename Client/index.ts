import { Airgram, Auth, prompt } from 'airgram';
import config from 'config';
import { SendMessage } from "./utils/send_message.utils";

const airgram = new Airgram({
    apiId: config.get('API_ID'),
    apiHash: config.get('API_HASH'),
    command: config.get('PATH_TO_TDLIB_FILE'),
    logVerbosityLevel: 0,
    filesDirectory: './db'
});

airgram.use(new Auth({
    code: () => prompt("Please enter the secret code:\n"),
    phoneNumber: () => prompt("Please enter your phone number:\n")
}));

export const idSend = async (chatId: number, href: string) => {
    try {
        //Какотанация строк http
        const doc = await SendMessage(chatId, href)

        if(!("content" in doc.response)){
            return "content not found in doc.response"
        }

        if(!("document" in doc.response.content)){
            return "document not found in doc.response.content"
        }

        const id = doc.response.content.document.document.remote.id

        return id;
    } catch (e) {
        return e.message;
    }
};

export { airgram };
