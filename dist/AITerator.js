"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loader_abstract_1 = require("./classes/abstract/loader.abstract");
class AITerator extends loader_abstract_1.Loader {
    constructor(iterable = [], key = null) {
        super(iterable, key);
        this.iterable = iterable;
        this.key = key;
    }
}
exports.AITerator = AITerator;
//# sourceMappingURL=AITerator.js.map