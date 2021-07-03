"use strict";
exports.__esModule = true;
var AITerator_1 = require("../AITerator");
var sample = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }];
var arrayItems = new AITerator_1.AITerator(sample, 'num');
console.log(arrayItems.getIterable());
console.log('=======================');
console.log('=======================');
console.log('=======================');
arrayItems.push({ num: 6 }, { num: 8 }, { num: 9 }, { num: 9 });
console.log(arrayItems.getIterable());
console.log('=======================');
console.log('=======================');
console.log('=======================');
arrayItems.unshift({ num: 6 }, { num: 8 }, { num: 9 }, { num: 9 }, { num: 1 });
console.log(arrayItems.getIterable());
console.log('=======================');
console.log('=======================');
console.log('=======================');
arrayItems.pop(3);
console.log(arrayItems.getIterable());