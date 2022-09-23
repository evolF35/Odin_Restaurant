import setHomePage from './homepage.js';
import setHeader from './header.js';
import setMenuPage from './menu.js';
import setContactPage from './contact.js';


let content = document.querySelector("#gabagool");

console.log(content);

content.appendChild(setHeader());
content.appendChild(setHomePage());

console.log("Webpack u there?");


let contactButton = document.getElementById("contactButton");

let alps = content.querySelector("#info");


contactButton.addEventListener('click',() => {
    alps.innerHTML = "";
    content.appendChild(setContactPage());
});

let menuButton = document.getElementById("menuButton");

menuButton.addEventListener('click',() => {
    alps.innerHTML = "";
    content.appendChild(setMenuPage());
});


let homeButton = document.getElementById("homeButton");

homeButton.addEventListener('click',() => {
    alps.innerHTML = "";
    content.appendChild(setHomePage());
});
