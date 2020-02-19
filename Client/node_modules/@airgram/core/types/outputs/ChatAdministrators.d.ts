import { ChatAdministrator } from './index';
export declare type ChatAdministratorsUnion = ChatAdministrators;
/** Represents a list of chat administrators */
export interface ChatAdministrators {
    _: 'chatAdministrators';
    /** A list of chat administrators */
    administrators: ChatAdministrator[];
}
