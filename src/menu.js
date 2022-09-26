

export default function setMenuPage() {
    let alps = document.getElementById("info");

    let container = document.createElement('div');
    container.setAttribute('class','menuItems');


    let c1 = createfood('img/imageedit_3_2183021804.gif',"Sparkling Lime!");

    let c2 = createfood('img/imageedit_7_3857785182.gif', "Pink Extravaganza!");

    let c3 = createfood('img/imageedit_9_5172012752.gif',"Steel Fire!")

    let c4 = createfood('img/imageedit_31_9454673711.gif',"Rocks on a Stick!");

    let c5 = createfood("img/imageedit_10_2080267789.png", "Joe Rogan Special!");

    let c6 = createfood("img/imageedit_15_9786429481.png", "Off the Ground!");

    let c7 = createfood("img/imageedit_22_9388403266.png", "Physics!");

    let c8 = createfood("img/imageedit_32_7339193716.png", "Expensive Spensive!");

    container.appendChild(c1);
    container.appendChild(c2);
    container.appendChild(c3);
    container.appendChild(c4);
    container.appendChild(c5);
    container.appendChild(c6);
    container.appendChild(c7);
    container.appendChild(c8);

    alps.appendChild(container);

    return(alps);      
  }


  function createfood(img,text){
    let c1 = document.createElement('div');

    let pic = document.createElement('img');
    pic.src = img;
    c1.append(pic);

    let pg = document.createElement('p');
    pg.innerText = text;
    c1.append(pg);

    return(c1);
  }