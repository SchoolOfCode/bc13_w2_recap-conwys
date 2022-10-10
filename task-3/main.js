async function getCatImage() {
    let catAPI = await fetch('https://api.thecatapi.com/v1/images/search');
    let catData = await catAPI.json();
    let imageURL = await catData[0].url;
    let imageElement = document.getElementById('cat-here');
    imageElement.src=imageURL;
    console.log(imageURL);
}

let button = document.createElement('button');
button.textContent="Click me!"
let body = document.querySelector('body');
body.appendChild(button);
button.id="cat-button";

button.addEventListener("click",getCatImage);