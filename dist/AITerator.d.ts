import { Loader } from './classes/abstract/loader.abstract';
export declare class AITerator extends Loader {
    iterable: any[];
    key: number | string;
    constructor(iterable?: any[], key?: number | string);
}
