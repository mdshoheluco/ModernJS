// MAPS = Key-value pairs - can use any type as a key or value
const map1 = new Map();

// Set keys
const key1 = 'Some string',
      key2 = {},
      key3 = () => {};
 
// set map values by key
map1.set(key1, 'Value of key1')
map1.set(key2, 'Value of key2')
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
console.log(map1.size);


// Loop using for ...of to get keys and values
for(let [key, value] of map1) {
    console.log(`${key} = ${value}`);
}

// Iterate keys only
for(let key of map1.keys()) {
    console.log(key);
}

// iterate values only 
for(let value of map1.values()) {
    console.log(value);
}

// Loop with foreach
map1.forEach((key, value) => {
    console.log(`${key} = ${value}`);
});

// Convert to Arrays
// Create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of the values
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);