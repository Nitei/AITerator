"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var loader_abstract_1 = require("./classes/abstract/loader.abstract");
var AITerator = /** @class */ (function (_super) {
    __extends(AITerator, _super);
    function AITerator(iterable, key) {
        if (iterable === void 0) { iterable = []; }
        if (key === void 0) { key = null; }
        var _this = _super.call(this, iterable, key) || this;
        _this.iterable = iterable;
        _this.key = key;
        return _this;
    }
    return AITerator;
}(loader_abstract_1.Loader));
exports.AITerator = AITerator;
