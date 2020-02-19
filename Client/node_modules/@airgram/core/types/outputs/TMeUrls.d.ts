import { TMeUrl } from './index';
export declare type TMeUrlsUnion = TMeUrls;
/** Contains a list of t.me URLs */
export interface TMeUrls {
    _: 'tMeUrls';
    /** List of URLs */
    urls: TMeUrl[];
}
