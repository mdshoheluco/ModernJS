// Lecture 1
/*
let val;

val = document;
val = document.all;
val = document.all[3];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach((script) => {
    console.log(script.getAttribute('src'));
});


console.log(val);
*/

// Lecture 2
/*
let selectID = document.getElementById('task-title');
selectID = document.getElementById('task-title').id;
selectID = document.getElementById('task-title').className;

console.log(selectID);

const taskTitle = document.getElementById('task-title');

// change styling
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
// document.getElementById('task-title').style.display = "none";

//Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color: red">Task List</span>'

// document.querySelector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'red';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = 'yellow';
document.querySelector('li:nth-child(even)').style.background = 'blue';
*/

// Lecture 3
/*
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = "red";
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'green';
lis[3].textContent = 'Hello World';


lis = Array.from(lis);
lis.reverse();

lis.forEach((li, index) => {
    console.log(li.className);
    li.textContent = `${index} : Hello`;
});

console.log(lis);

const itemsLi = document.querySelectorAll('ui.collection li.collection-item');
itemsLi.forEach((item, index) => {
    item.textContent = `${index} : Hello World`;
});
console.log(itemsLi);

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((li, index) => {
    li.style.background = '#ccc';
});

liEven.forEach((li, index) => {
    li.style.background = '#ddd';
});

for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = 'green';
}
*/

// Lecture 4
/*
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 4 - Comment
// 5 - Document itself
// 6 - Doctype

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// Children of children
val = list.children[3].children;
val.id = 'test-link';

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

// Parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
*/

// Lecture 5
/*
// Creating elements in the DOM
let li = document.createElement('li');

// Add class to the element
li.className = 'collection-item';

// Add id to the attribute
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Get attribute
// li = li.getAttribute('title');

// Insert icon link
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.href = '#';
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);

// Create text node and append
let texts = document.createTextNode('Hello World');
li.appendChild(texts);

// Append to the UL
let ul = document.querySelector('ul');
ul.appendChild(li);

console.log(li);
*/

// Lecture 6
/*
// Create new header
const newHeader = document.createElement('h2');
newHeader.id = 'task-title';
newHeader.appendChild(document.createTextNode('New Task'));

// Get the old header
const oldHeading = document.getElementById('task-title');

const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeader, oldHeading);


// Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[1]);

// Classess and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link;

// classess
val = link.className;
val = link.classList;
val = link.classList[0];

link.classList.add('test');
link.classList.remove('test');

val = link;

// Attributes
val = link.getAttribute('href');
link.setAttribute('href', 'https://www.google.com');
val = link.hasAttribute('title');
link.setAttribute('title', 'remove item');
link.removeAttribute('title');

val= link;

console.log(val);
*/

// Lecture 7
/*
document.querySelector('.clear-tasks').addEventListener('click', function(e) {
    e.preventDefault();

    val = e;

    // Event target element
    val = e.target;
    val = e.target.className;
    val = e.target.classList;

    // Event type
    val = e.type;

    // Coords relative to the window
    val = e.clientX;
    val = e.clientY;

    // Coords event relative to the element
    val = e.offsetX;
    val = e.offsetY;
    console.log(val);
});
*/

// Lecture 8
/*
const card = document.querySelector('.card');
const clearBtn = document.querySelector('.clear-tasks');
const heading = document.querySelector('h5');

// Click event
clearBtn.addEventListener('click', runEvent);
// doubleclick event
clearBtn.addEventListener('dblclick', runEvent);
//Mousedown
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
clearBtn.addEventListener('mouseup', runEvent);
//Mouseenter
card.addEventListener('mouseenter', runEvent);
// Mouseleave
card.addEventListener('mouseleave', runEvent);

// Mouseover
card.addEventListener('mouseover', runEvent);
// Mouseout
card.addEventListener('mouseout', runEvent);

card.addEventListener('mousemove', runEvent);

function runEvent(e) {
    console.log(`MOUSE EVENT: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
*/

// Lecture 9
/*
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// form.addEventListener('submit', runEvent);
// taskInput.addEventListener('keydown', runEvent);

// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('copy', runEvent);
// taskInput.addEventListener('paste', runEvent);
// taskInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent);


function runEvent(e) {
    console.log(e);
    console.log(`Mouse Event: ${e.type}`);
    console.log(e.target.value);

    heading.innerText = e.target.value;

    e.preventDefault();
}
*/

// Lecture 10
// Event bubbling and event delegation
/*
// Event bubbling
document.querySelector('.card-title').addEventListener('click', function() {
    console.log('Card title');
});

document.querySelector('.card-content').addEventListener('click', function() {
    console.log('Card content');
});

document.querySelector('.card').addEventListener('click', function() {
    console.log('Card');
});

document.querySelector('.col').addEventListener('click', function() {
    console.log('Col');
});

document.querySelector('.row').addEventListener('click', function() {
    console.log('row');
});

document.querySelector('.container').addEventListener('click', function() {
    console.log('Container');
});

document.querySelector('body').addEventListener('click', function() {
    console.log('Body');
});

document.querySelector('html').addEventListener('click', function() {
    console.log('html');
});

// Event delegation
const delItem = document.querySelector('.delete-item');
delItem.addEventListener('click', deleteItem);

document.querySelector('ul.collection').addEventListener('click', deleteItem);

function deleteItem(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}
*/

// Lecture 11
//Local and session storage
/*
// set local storage item
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// session storage
sessionStorage.setItem('name', 'John');

// get from local storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

console.log(name, age);

// remove local storage
localStorage.removeItem('name');

// clear local storage
localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.getElementById('task').value;
    // localStorage.setItem('task', task);

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => {
    console.log(task);
});
*/