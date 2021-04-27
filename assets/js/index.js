'use strict';
const form = document.getElementById("root-form");

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const {target: {elements:{email}}} = event;
    console.dir(event.target);
});

// task 1
const form = document.querySelector("rootForm");
const arr = [];

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const{
        target,
        target: {
           elements: {test2},
        }, 
    } = event;
    console.log(test2.value);
    arr.push(test2.value);
    target.reset ();
});

// Task 3
function createListItem(value) {
    const listItem = document.createElement('li');
    listItem.innerText = value;

    return listItem;
}
list.append(createListItem(test2.value));






