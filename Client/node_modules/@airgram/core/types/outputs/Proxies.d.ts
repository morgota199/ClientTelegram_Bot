import { Proxy } from './index';
export declare type ProxiesUnion = Proxies;
/** Represents a list of proxy servers */
export interface Proxies {
    _: 'proxies';
    /** List of proxy servers */
    proxies: Proxy[];
}
