document.querySelector("#joke-form").addEventListener('submit', (e) => {
    e.preventDefault();
    const numberOfJokes = document.querySelector('#number').value;
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);
    xhr.onload = function() {
        if(xhr.status === 200) {
            if(numberOfJokes > 0) {
                const jokes = document.querySelector('.jokes');
            const response = JSON.parse(this.responseText);
            let output = '';
            if(response.type === 'success') {
                response.value.forEach((joke) => {
                    output += `
                        <li>${joke.joke}</li>
                    `;
                });
            }else {
                output += '<li>Something went wrong</li>';
            }
            jokes.innerHTML = output;
            document.querySelector('#notice').textContent = '';
         }else {
             document.querySelector('#notice').textContent = 'Please enter a number greater 0';
             document.querySelector('#number').focus();
         }
            }
    }
    xhr.send();
});