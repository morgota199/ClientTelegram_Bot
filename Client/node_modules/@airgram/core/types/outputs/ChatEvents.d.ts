import { ChatEvent } from './index';
export declare type ChatEventsUnion = ChatEvents;
/** Contains a list of chat events */
export interface ChatEvents {
    _: 'chatEvents';
    /** List of events */
    events: ChatEvent[];
}
