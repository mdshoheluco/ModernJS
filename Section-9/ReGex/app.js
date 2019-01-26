// let re;
// re = /hello/;
// adding i makes this case insensitive
// re = /hello/i; 

// global search
// re = /hello/g; 

// console.log(re);
// console.log(re.source);

// exec() // Return result in an array or null
// const result = re.exec('tom hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);

// test() - Returns true or false
// const result = re.test('hello world hello');
// console.log(result);

// match() - Return result array or null
// const str = 'hello world';
// const result = str.match(re);
// console.log(result);

// search() - Return index of the first match if not found it returns -1
// const str = 'hello there';
// const result = str.search(re);
// console.log(result);

// replace() - return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'hi');
// console.log(newStr);

// -----------------------------------------

// Part 2

let re;
// Literal characters
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /d$/; // Must ends with
re = /^hello$/i; //  Start with and end with
re = /h.ello/i; // Matches any ONE character
re = /h*llo/i; // Matches any character o or more times
re = /gre?a?y/i; // optional characters
re = /gre?a?y\?/i;

// Brackets [] - Character sets
re = /gr[ae]y/i;  // Must be a or e
re = /gr[^ae]y/i;  // can be anything except a and e
re = /[A-Z]ray/; // Match any uppsercase letter
re = /[a-z]/; // Match any lowercase letter
re = /[A-Za-z]/; // Match any letter
re = /[0-9]ray/; //Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount
re = /Hel{2,4}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parenthesis () - grouping
re = /^([0-9]x){3}$/i;

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-word characters

re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // non digit

re = /\s/; // Match whitespace character
re = /\S/; // Match non whitespace characters

re = /Hell\b/; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x if not followed by y

// String to match
const str = 'hgsfgdsxjdshag';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    }else {
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);