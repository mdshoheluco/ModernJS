// // Book contructor
// function Book(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
// }

// // UI Contructor
// function UI() {}

// UI.prototype.addBookToList = function(book) {
//     const list = document.querySelector("#book-list");
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}</td>
//         <td><a href="#" class="delete">X</a></td>
//     `;
//     list.appendChild(tr);
// }

// UI.prototype.clearFields = function() {
//     document.querySelector('#title').value = '';
//     document.querySelector('#author').value = '';
//     document.querySelector('#isbn').value = '';
// }

// UI.prototype.showMessage = function(message, type) {
//     const div = document.createElement('div');
//     div.className = `alert ${type}`;
//     div.appendChild(document.createTextNode(message));

//     const container = document.querySelector('.container');
//     const form = document.querySelector('#book-form');

//     container.insertBefore(div, form);

//     setTimeout(function() {
//         document.querySelector('.alert').remove();
//     }, 3000);
// }

// // Event listener
// document.querySelector('#book-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const title = document.querySelector('#title').value;
//     const author = document.querySelector('#author').value;
//     const isbn = document.querySelector('#isbn').value;

//     // Instantiate a book
//     const book = new Book(title, author, isbn);

//     // Instantiate UI
//     const ui = new UI();

//     if(title === '' || author === '' || isbn === '') {
//         ui.showMessage('Please fill up all the fields', 'error');
//     }else {
//         ui.addBookToList(book);
//         ui.clearFields();
//         ui.showMessage('Book Added', 'success');
//     }
// });

// // Delete book
// document.querySelector('#book-list').addEventListener('click', function(e) {
//     if(e.target.classList.contains('delete')) {
//         e.target.parentElement.parentElement.remove();
//         const ui = new UI();
//         ui.showMessage('Book Deleted', 'error');
//     }
// });

// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI
class UI {
    static addBookToList(book) {
        const tbody = document.querySelector('#book-list');
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        tbody.appendChild(tr);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// Local storage
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        }else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        let books = Store.getBooks();
        books = Array.from(books);
        books.forEach(function(book) {
           UI.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event listenrs
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get the values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);
    if(title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all the fileds', 'error');
    }else {
        UI.addBookToList(book);
        Store.addBook(book);
        UI.clearFields();
        UI.showAlert('Book Added', 'success');
    }
});

// Delete 
document.querySelector('#book-list').addEventListener('click', (e) => {
    if(confirm('Are you sure?')) {
        e.target.parentElement.parentElement.remove();
        UI.showAlert('Book Deleted', 'error');
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    }
});

document.addEventListener('DOMContentLoaded', Store.displayBooks);