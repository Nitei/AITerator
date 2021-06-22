"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loader {
    constructor(iterable = [], key = null) {
        this.iterable = iterable;
        this.key = key;
        this.iterante = [];
        this.fillIterable();
        delete this.iterable;
    }
    fillIterable() {
        if (!Array.isArray(this.iterable) ||
            this.iterable.length === 0 ||
            !this.key)
            throw new Error();
        if (!this.checkItemHasKey(this.iterable[0]))
            throw new Error(`La key ${this.key} no exite en el item`);
        this.iterable.forEach(item => {
            if (this.has(item[this.key]))
                return;
            this.iterante.push(this.createItem(item));
        });
    }
    checkItemHasKey(item) {
        return Object.keys(item).includes(this.key.toString());
    }
    createItem(newItem) {
        return {
            item: newItem,
            key: newItem[this.key]
        };
    }
    putIn(item, method) {
        if (!this.has(item[this.key])) {
            this.iterante[method]();
        }
        else
            console.error(`La key ${item[this.key]} ya existe`);
    }
    putOut(method) {
        this.iterante[method]();
    }
    seek(key) {
        const elRef = this.iterante.findIndex(el => el.key === key);
        return {
            idx: elRef,
            value: elRef >= 0 ? this.iterante[elRef].item : null
        };
    }
    clear() {
        this.iterante = [];
    }
    delete(key) {
        if (this.has(key)) {
            this.iterante.splice(this.seek(key).idx, 1);
            return true;
        }
        else {
            console.error('No existe el objeto a borrar');
        }
    }
    has(key) {
        return this.seek(key).idx >= 0;
    }
    get(key) {
        return this.seek(key).value;
    }
    unshift(item) {
        this.putIn(item, 'unshift');
    }
    push(item) {
        this.putIn(item, 'push');
    }
    shift() {
        this.putOut('shift');
    }
    pop() {
        this.putOut('pop');
    }
    value() {
        return { iterante: this.iterante, key: this.key };
    }
    getIterable() {
        return this.iterante;
    }
    getKey() {
        return this.key;
    }
}
exports.Loader = Loader;
//# sourceMappingURL=loader.abstract.js.map