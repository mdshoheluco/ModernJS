// async function testAsync() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hello');
//         }, 1000);
//     });

//     const err = false;
//     if(!err) {
//         return res;
//     }else {
//         await Promise.reject(new Error('Something went wrong'));
//     }

//     const res = await promise;
//     return res;
// }

// testAsync().then(res => console.log(res)).catch(err => console.log(err));

// async function getUsers() {
//     // await response of the fetch call
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     // Only proceed once its resolved
//     const data = await response.json();

//     // only proceed once second promise os resolved
//     return data;
// }

// getUsers().then(res => console.log(res));

const http = new EasyHttp();

// GET
http.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => console.log(res));


const data = {
    name: 'John Doe',
    email: 'john@gmail.com'
}
http.post('https://jsonplaceholder.typicode.com/users', data).then((res) => console.log(res));

// PUT
http.put('https://jsonplaceholder.typicode.com/users/2', data).then(res => console.log(res));
http.delete('https://jsonplaceholder.typicode.com/users/2').then(res => console.log(res));