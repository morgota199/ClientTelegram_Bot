import {airgram} from "../index";

export const SendMessage = async (chatId: number, href: string) => {
    return airgram.api.sendMessage({
        chatId: chatId,
        inputMessageContent: {
            _: 'inputMessageDocument',
            document: {
                _: 'inputFileRemote',
                id: href
            },
            thumbnail: {
                _: 'inputThumbnail',
                thumbnail: {
                    _: 'inputFileRemote',
                    id: href
                }
            }
        }
    })
}