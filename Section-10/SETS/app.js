// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A String');
set1.add({name: 'john'});
set1.add(true);

// Another way fo adding values to the sets
const set2 = new Set([500, 'My Set', {name: 'Paul'}, false]);

// console.log(set1);
// console.log(set2);

// Get Count
// console.log(set1.size);

// Checko for values
// console.log(set1.has(100)); // true
// console.log(set1.has(50 + 50)); // true
// console.log(set1.has({name: 'John'})); // False : reference type

// Delete from set
// set1.delete(100);
// console.log(set1);

// For ... of
for(let item of set1) {
    console.log(item);
}

// foreach loop
set1.forEach((value) => {
    console.log(value);
});

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);