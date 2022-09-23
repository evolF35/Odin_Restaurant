


export default function setContactPage() {
    let alps = document.getElementById("info");

    let content = document.createElement("div");
    content.setAttribute('class','contact');

    let phoneNumber = makeText("+1 155-999-1729");
    let emailAddress = makeText("EVMsurfer4k@ethmail.com")
    let address = makeText("Bletchley Park, England");

    content.appendChild(phoneNumber);
    content.appendChild(emailAddress);
    content.appendChild(address);    



    let photoCredit = makeText("Images: https://www.flaticon.com/free-icons/bite");
    let author = makeText("Images were created by bqlqn, https://www.flaticon.com/authors/bqlqn");
    let coolWebsite = makeText("Image editor: https://www2.lunapic.com/editor/");
    
    content.appendChild(photoCredit);
    content.appendChild(author);
    content.appendChild(coolWebsite);


    alps.appendChild(content);

    return(alps);       
  }


function makeText(text){
    let content = document.createElement("div");

    let tax = document.createElement("p");
    tax.innerText = text;

    content.appendChild(tax);

    return(content);
}
