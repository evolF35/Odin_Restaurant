

export default function setHomePage() {
    let alps = document.getElementById("info");

    let container = document.createElement('div');
    container.setAttribute('class','icebox');

    let pic = document.createElement('img');
    pic.src = 'img/popsicle1.png';

    let pg = document.createElement('p');
    pg.innerText = "Welcome to the IceBox!";
    pg.setAttribute('class','welcome');


    let pg2 = document.createElement('p');
    pg2.innerText = "The place for the coldest ice";

    container.appendChild(pg);
    container.appendChild(pic);
    container.appendChild(pg2);


    alps.appendChild(container);

    return(alps);    
  }

