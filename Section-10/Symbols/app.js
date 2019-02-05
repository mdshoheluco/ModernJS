// Create a Symbol
const sym1 = Symbol();
console.log(sym1);

const sym2 = Symbol('sym2');
console.log(sym2);
console.log(typeof sym1);

// Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
for(let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));