export declare class TDLibError extends Error {
    readonly code: number;
    readonly type?: string;
    constructor(code: number, message?: string);
    toString(): string;
}
