// document.querySelector('#button').addEventListener('click', loadData);

// function loadData() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'data.txt', true);
//     xhr.onload = function() {
//         if(this.status === 200) {
//             const response = document.querySelector('#output');
//             response.innerHTML = `<h1>${this.responseText}</h1>`
//         }
//     }

//     // Optional - used for spinners
//     xhr.onprogress = function() {
//         console.log(xhr.readyState);
//     }

//     console.log('ReadyState', xhr.readyState);
//     // xhr.onreadystatechange = function() {
//     //     console.log('ReadyState', xhr.readyState);
//     //     if(this.status === 200 && this.readyState === 4) {
//     //         console.log(this.responseText);
//     //     }
//     // }

//     xhr.onerror = function() {
//         console.log('Request Error');
//     }
//     xhr.send();

//     // readyState Values
//     // 0 : request not initialized
//     // 1: server connection established
//     // 2: request recieved
//     // 3: processing request
//     // 4: request finished and response is ready

//     // Status
//     // 200 : success
//     // 403 : forbidden
//     // 404 : not found
// }

// document.querySelector('#button').addEventListener('click', loadData);

// function loadData() {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'data.txt', true);
//     xhr.onload = function() {
//         if(xhr.status === 200) {
//             const response = document.querySelector('#output');
//             response.innerHTML = `${xhr.responseText}`;
//         }
//     }
//     xhr.onprogress = function() {
//         console.log('Loading...');
//     }
//     xhr.onerror = function() {
//         console.log('Error');
//     }
//     xhr.send();
// }

// Single customer

document.querySelector('#button1').addEventListener('click', loadCustomer);

function loadCustomer() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);

    xhr.onload = function() {
        if(xhr.status === 200) {
            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;
            document.querySelector('#customer').innerHTML = output;
        }
    }
    xhr.send();
}

// Load customers
document.querySelector('#button2').addEventListener('click', loadCustomers);

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    
    xhr.onload = function() {
        if(xhr.status === 200) {
            const customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach((customer) => {
                output += `
                    <ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>
                    </ul>
                `;
            });
            document.querySelector('#customers').innerHTML = output;
        }
    }
    xhr.send();
}