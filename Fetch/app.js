let button1 = document.querySelector('#button1');
button1.addEventListener('click', getText);

let output = document.querySelector('#output');

function getText() {
    fetch('text.txt')
        .then((res) => {
            return res.text();
    }).then((data) => {
        output.textContent = data;
    }).catch((err) => {
        console.log(err);
    });
}

document.querySelector('#button2').addEventListener('click', () => {
    fetch('posts.json')
        .then((res) => {
            return res.json();
        })
        .then((posts) => {
            let result = '';
            posts.forEach((post, index) => {
                result += `
                    <ul>
                        <li>ID: ${index}</li>
                        <li>Title: ${post.title}</li>
                        <li>Body: ${post.body}</li>
                    </ul>
                `;
            });
            output.innerHTML = result;
        });
});

// Get external data
document.querySelector('#button3').addEventListener('click', () => {
    fetch('https://api.github.com/users')
    .then((data) => {
        return data.json();
    }).then((data) => {
        let result = '';
        data.forEach((user) => {
            result += `
                <ul>
                    <li>${user.id}</li>
                    <li>${user.login}</li>
                    <li>${user.url}</li>
                    <li>${user.type}</li>
                </ul>
            `;
        });
        output.innerHTML = result;
    });
});