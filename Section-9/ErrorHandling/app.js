try {
    // Reference error
    // myFunction();

    // Type error
    // null.myFunction();

    // Syntax error
    // console.log(eval(2 +2));
    // eval('Hello World');

    // URL error
    decodeURIComponent('%');
}catch(err) {
    console.log(err);
    console.log(err.message);
    console.log(err.name);
    console.log(err instanceof ReferenceError);
    console.log(err instanceof TypeError);
} finally {
    console.log('Finally runs regardless of result...');
}

console.log('App Continues...');

// Create your own error
const user = {
    email: 'john@gmail.com'
}

if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
}