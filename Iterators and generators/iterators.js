// Iterators
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length ? 
            { value: names[nextIndex++], done: false } :
            { done: true }
        }
    }
}

// Create an array of names
const nameArr = ['Jack', 'Jill', 'John'];

// Init iterator and pass in the names array
const names = nameIterator(nameArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
