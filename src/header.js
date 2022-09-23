
export default function setHeader() {

    console.log("header");

    let header = document.createElement('div');
    header.setAttribute("class","header");

    let ul = document.createElement('ul');

    let home = document.createElement('li');
    home.innerText = "home";
    home.setAttribute('id',"homeButton");

    let contact = document.createElement('li');
    contact.innerText = "contact";
    contact.setAttribute('id',"contactButton");


    let menu = document.createElement('li');
    menu.innerText = "menu";
    menu.setAttribute('id',"menuButton");


    ul.appendChild(home);
    ul.appendChild(contact);
    ul.appendChild(menu);


    header.appendChild(ul);

    return(header);
  }
