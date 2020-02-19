import { LanguagePackStringValueInputUnion } from './index';
export declare type LanguagePackStringInputUnion = LanguagePackStringInput;
/** Represents one language pack string */
export interface LanguagePackStringInput {
    _: 'languagePackString';
    /** String key */
    key?: string;
    /** String value */
    value?: LanguagePackStringValueInputUnion;
}
