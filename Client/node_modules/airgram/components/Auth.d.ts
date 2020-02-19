import { Context, MiddlewareFn } from '@airgram/core';
declare type AuthConfigOption = string | (() => string) | (() => Promise<string>);
interface AuthConfig {
    code?: AuthConfigOption;
    firstName?: AuthConfigOption;
    lastName?: AuthConfigOption;
    phoneNumber?: AuthConfigOption;
    password?: AuthConfigOption;
    token?: AuthConfigOption;
}
export declare class Auth {
    maxAttempts: number;
    private _airgram?;
    private answers;
    private attempt;
    private authState;
    private readonly config;
    private deferred;
    private invalidPhoneNumbers;
    constructor(config: AuthConfig);
    get isAuthorized(): boolean;
    get isBot(): boolean;
    private get airgram();
    middleware(): MiddlewareFn<Context>;
    private ask;
    private askPhoneNumber;
    private checkAuthenticationPassword;
    private fatalError;
    private handleError;
    private handleUpdateState;
    private login;
    private registerUser;
    private sendCode;
}
export {};
