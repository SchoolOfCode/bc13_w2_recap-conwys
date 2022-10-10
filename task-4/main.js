let button = document.querySelector('button');
let importantThings = [];
let listOfThings = document.createElement('ol');
let body = document.querySelector('body');
body.appendChild(listOfThings);
button.addEventListener("click",getInputText);

function getInputText() {
    let importantThing = document.querySelector('input').value;
    let listItem = document.createElement('li');
    listOfThings.appendChild(listItem);
    listItem.textContent=importantThing;
    importantThings.push(importantThing);
    console.log(importantThings);
}