import { TextEntity } from './index';
export declare type TextEntitiesUnion = TextEntities;
/** Contains a list of text entities */
export interface TextEntities {
    _: 'textEntities';
    /** List of text entities */
    entities: TextEntity[];
}
