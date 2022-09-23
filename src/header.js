
export default function setHeader() {


    let header = document.createElement('div');
    header.setAttribute("class","header");

    let ul = document.createElement('ul');

    let home = document.createElement('li');
    home.innerText = "home";
    home.setAttribute('id',"homeButton");

    let contact = document.createElement('li');
    contact.innerText = "contact";
    home.setAttribute('id',"contactButton");


    let menu = document.createElement('li');
    menu.innerText = "menu";
    home.setAttribute('id',"menuButton");


    ul.appendChild(home);
    ul.appendChild(contact);
    ul.appendChild(menu);


    header.appendChild(ul);

    return(header);

  }
