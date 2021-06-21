export declare abstract class Loader {
    iterable: any[];
    key: number | string;
    protected iterante: any[];
    constructor(iterable?: any[], key?: number | string);
    protected fillIterable(): void;
    protected checkItemHasKey(item: any): boolean;
    protected createItem(newItem: any): {
        item: any;
        key: any;
    };
    protected putIn(item: any, method: 'push' | 'unshift'): void;
    protected putOut(method: 'pop' | 'shift'): void;
    clear(): void;
    delete(key: any): boolean;
    seek(key: any): {
        idx: number;
        value: any;
    };
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
