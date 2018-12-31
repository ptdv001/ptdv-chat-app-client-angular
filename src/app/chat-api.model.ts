
// TODO use typescript-generator to create - pull from Server?
declare module 'chat-api' {
    interface Message {
        id: number;
        timestamp: Date;
        username: string;
        message: string;
    }

    interface Chat {
        chatId: number;
        messages: Array<Message>
    }

    interface Chats {
        // TODO possibly change API
    }
}
