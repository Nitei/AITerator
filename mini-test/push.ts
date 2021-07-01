import { AITerator } from '../AITerator';

const sample = [ { num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 } ];
const arrayItems = new AITerator( sample, 'num' );


console.log( arrayItems.getIterable() )

console.log( '=======================' )
console.log( '=======================' )
console.log( '=======================' )

arrayItems.push( { num: 6 }, { num: 8 }, { num: 9 }, { num: 9 })
console.log( arrayItems.getIterable() )

console.log( '=======================' )
console.log( '=======================' )
console.log( '=======================' )

arrayItems.unshift( { num: 6 }, { num: 8 }, { num: 9 }, { num: 9 }, { num: 1 })
console.log( arrayItems.getIterable() )


