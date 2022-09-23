import setHomePage from './homepage.js';
import setHeader from './header.js';
import setMenuPage from './menu.js';
import setContactPage from './contact.js';


let content = document.querySelector("#gabagool");

let alps = document.createElement('div');
alps.setAttribute("id","info");

content.appendChild(alps);


content.appendChild(setHeader());
content.appendChild(setHomePage());


let contactButton = document.getElementById("contactButton");

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
