import setHomePage from './homepage.js';
import setHeader from './header.js';
import setMenuPage from './menu.js';
import setContactPage from './contact.js';


let content = document.querySelector("#gabagool");
console.log(content);

console.log("Webpack u there?");

setHeader();
setHomePage();

let contactButton = document.getElementById("contactButton");

contactButton.addEventListener('click',() => {
    setContactPage();
});

let menuButton = document.getElementById("menuButton");

menuButton.addEventListener('click',() => {
    setMenuPage();
});


let homeButton = document.getElementById("homeButton");

homeButton.addEventListener('click',() => {
    setHomePage();
});
