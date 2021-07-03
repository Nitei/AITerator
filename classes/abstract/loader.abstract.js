"use strict";
exports.__esModule = true;
var Loader = /** @class */ (function () {
    function Loader(iterable, key) {
        if (iterable === void 0) { iterable = []; }
        if (key === void 0) { key = null; }
        this.iterable = iterable;
        this.key = key;
        this.iterante = [];
        this.fillIterable();
        delete this.iterable;
    }
    Loader.prototype.fillIterable = function () {
        var _this = this;
        if (!Array.isArray(this.iterable) ||
            this.iterable.length === 0 ||
            !this.key)
            throw new Error();
        if (!this.checkItemHasKey(this.iterable[0]))
            throw new Error("La key " + this.key + " no exite en el item");
        this.iterable.forEach(function (item) {
            if (_this.has(item[_this.key]))
                return;
            _this.iterante.push(_this.createItem(item));
        });
    };
    Loader.prototype.checkItemHasKey = function (item) {
        return Object.keys(item).includes(this.key.toString());
    };
    Loader.prototype.createItem = function (newItem) {
        return {
            item: newItem,
            key: newItem[this.key]
        };
    };
    Loader.prototype.putIn = function (obj) {
        var _this = this;
        if (!obj || !obj.items || obj.items.length === 0)
            return console.error("El la lista de objetos esta vacia");
        obj.items.forEach(function (item) {
            if (_this.has(item[_this.key]))
                return console.error("La key " + obj.items[_this.key] + " ya existe");
            _this.iterante[obj.method](_this.createItem(item));
        });
    };
    Loader.prototype.putOut = function (howMany, method) {
        for (var index = 0; index < howMany; index++) {
            this.iterante[method]();
        }
    };
    Loader.prototype.seek = function (key) {
        var elRef = this.iterante.findIndex(function (el) { return el.key === key; });
        return {
            idx: elRef,
            value: elRef >= 0 ? this.iterante[elRef].item : null
        };
    };
    /** Clear the array */
    Loader.prototype.clear = function () {
        this.iterante = [];
    };
    Loader.prototype["delete"] = function (key) {
        if (this.has(key)) {
            this.iterante.splice(this.seek(key).idx, 1);
            return true;
        }
        else {
            console.error('No existe el objeto a borrar');
        }
    };
    Loader.prototype.has = function (key) {
        return this.seek(key).idx >= 0;
    };
    Loader.prototype.get = function (key) {
        return this.seek(key).value;
    };
    Loader.prototype.unshift = function () {
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        this.putIn({ items: item, method: 'unshift' });
    };
    Loader.prototype.push = function () {
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        this.putIn({ items: item, method: 'push' });
    };
    Loader.prototype.shift = function (howMany) {
        if (howMany === void 0) { howMany = 1; }
        this.putOut(howMany, 'shift');
    };
    Loader.prototype.pop = function (howMany) {
        if (howMany === void 0) { howMany = 1; }
        this.putOut(howMany, 'pop');
    };
    Loader.prototype.value = function () {
        return { iterante: this.iterante, key: this.key };
    };
    Loader.prototype.getIterable = function () {
        return this.iterante;
    };
    Loader.prototype.getKey = function () {
        return this.key;
    };
    return Loader;
}());
exports.Loader = Loader;
