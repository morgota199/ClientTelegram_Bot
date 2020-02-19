import { BaseTdObject, Composer as BaseComposer, Middleware, MiddlewareFn, NextFn } from '../types';
declare function compose<ContextT>(middlewares: Middleware<ContextT>[]): MiddlewareFn<ContextT>;
declare function branch<ContextT>(predicate: unknown, trueMiddleware: Middleware<ContextT>, falseMiddleware: Middleware<ContextT>): MiddlewareFn<ContextT>;
declare function optional<ContextT>(predicate: unknown, ...fns: Middleware<ContextT>[]): MiddlewareFn<ContextT>;
declare function mount<ContextT extends {
    _: string;
}>(predicateType: string | string[], ...fns: Middleware<ContextT>[]): Middleware<ContextT>;
declare function fork<ContextT>(middleware: Middleware<ContextT>): Middleware<ContextT>;
declare function filter<ContextT>(predicate: unknown): Middleware<ContextT>;
declare class Composer<ContextT extends BaseTdObject> implements BaseComposer<ContextT> {
    static compose: typeof compose;
    static fork: typeof fork;
    static filter: typeof filter;
    static branch: typeof branch;
    static mount: typeof mount;
    static optional: typeof optional;
    static noop: NextFn;
    protected handler: MiddlewareFn<ContextT>;
    constructor(...fns: Middleware<ContextT>[]);
    middleware(): MiddlewareFn<ContextT>;
    on(predicateTypes: string | string[], ...fns: Middleware<ContextT>[]): void;
    use(...fns: Middleware<ContextT>[]): void;
}
export { Composer };
