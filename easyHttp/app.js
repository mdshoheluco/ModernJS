const xhr = new easyHTTP();
// // Get posts
// xhr.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(response);
//     }
// });

// // Get post
// xhr.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(response);
//     }
// });

// Create data
// const data = {
//     title: 'Custom posts',
//     body: 'This is custom post'
// };

// // Create post
// xhr.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// });

// Create PUT
// xhr.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     }else {
//         console.log(post);
//     }
// });

// Create Delete Request
xhr.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if(err) {
        console.log(err);
    }else {
        console.log(response);
    }
});

