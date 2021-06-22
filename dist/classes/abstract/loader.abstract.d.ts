export declare abstract class Loader {
    iterable: any[];
    key: number | string;
    protected iterante: any[];
    constructor(iterable?: any[], key?: number | string);
    private fillIterable;
    private checkItemHasKey;
    private createItem;
    private putIn;
    private putOut;
    private seek;
    clear(): void;
    delete(key: any): boolean;
    has(key: any): boolean;
    get(key: any): any;
    unshift(item: any): void;
    push(item: any): void;
    shift(): void;
    pop(): void;
    value(): {
        iterante: any[];
        key: string | number;
    };
    getIterable(): any[];
    getKey(): string | number;
}
