import { FormattedText } from './index';
export declare type DeepLinkInfoUnion = DeepLinkInfo;
/** Contains information about a tg:// deep link */
export interface DeepLinkInfo {
    _: 'deepLinkInfo';
    /** Text to be shown to the user */
    text: FormattedText;
    /** True, if user should be asked to update the application */
    needUpdateApplication: boolean;
}
