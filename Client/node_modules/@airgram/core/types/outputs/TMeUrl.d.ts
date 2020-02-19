import { TMeUrlTypeUnion } from './index';
export declare type TMeUrlUnion = TMeUrl;
/** Represents a URL linking to an internal Telegram entity */
export interface TMeUrl {
    _: 'tMeUrl';
    /** URL */
    url: string;
    /** Type of the URL */
    type: TMeUrlTypeUnion;
}
