(()=>{"use strict";function e(){let e=document.getElementById("info"),t=document.createElement("div");t.setAttribute("class","icebox");let n=document.createElement("img");n.src="../dist/img/popsicle (1).png";let i=document.createElement("p");i.innerText="Welcome to the IceBox!",i.setAttribute("class","welcome");let d=document.createElement("p");return d.innerText="The place for the coldest ice",t.appendChild(i),t.appendChild(n),t.appendChild(d),e.appendChild(t),e}function t(e,t){let n=document.createElement("div"),i=document.createElement("img");i.src=e,n.append(i);let d=document.createElement("p");return d.innerText=t,n.append(d),n}function n(e){let t=document.createElement("div"),n=document.createElement("p");return n.innerText=e,t.appendChild(n),t}let i=document.querySelector("#gabagool"),d=document.createElement("div");d.setAttribute("id","info"),i.appendChild(d),i.appendChild(function(){let e=document.createElement("div");e.setAttribute("class","header");let t=document.createElement("ul");t.setAttribute("class","ul");let n=document.createElement("li");n.innerText="home",n.setAttribute("id","homeButton"),n.classList.add("headerButtons");let i=document.createElement("li");i.innerText="contact",i.setAttribute("id","contactButton"),i.classList.add("headerButtons");let d=document.createElement("li");return d.innerText="menu",d.setAttribute("id","menuButton"),d.classList.add("headerButtons"),t.appendChild(n),t.appendChild(i),t.appendChild(d),e.appendChild(t),e}()),i.appendChild(e()),document.getElementById("contactButton").addEventListener("click",(()=>{d.innerHTML="",i.appendChild(function(){let e=document.getElementById("info"),t=document.createElement("div");t.setAttribute("class","contact");let i=n("+1 155-999-1729"),d=n("EVMsurfer4k@ethmail.com"),l=n("Bletchley Park, England");t.appendChild(i),t.appendChild(d),t.appendChild(l);let a=n("Images: https://www.flaticon.com/free-icons/bite"),c=n("Images were created by bqlqn, https://www.flaticon.com/authors/bqlqn"),p=n("Image editor: https://www2.lunapic.com/editor/");return t.appendChild(a),t.appendChild(c),t.appendChild(p),e.appendChild(t),e}())})),document.getElementById("menuButton").addEventListener("click",(()=>{d.innerHTML="",i.appendChild(function(){let e=document.getElementById("info"),n=document.createElement("div");n.setAttribute("class","menuItems");let i=t("../dist/img/imageedit_3_2183021804.gif","Sparkling Lime!"),d=t("../dist/img/imageedit_7_3857785182.gif","Pink Extravaganza!"),l=t("../dist/img/imageedit_9_5172012752.gif","Steel Fire!"),a=t("../dist/img/imageedit_31_9454673711.gif","Rocks on a Stick!"),c=t("../dist/img/imageedit_10_2080267789.png","Joe Rogan Special!"),p=t("../dist/img/imageedit_15_9786429481.png","Off the Ground!"),m=t("../dist/img/imageedit_22_9388403266.png","Physics!"),o=t("../dist/img/imageedit_32_7339193716.png","Expensive Spensive!");return n.appendChild(i),n.appendChild(d),n.appendChild(l),n.appendChild(a),n.appendChild(c),n.appendChild(p),n.appendChild(m),n.appendChild(o),e.appendChild(n),e}())})),document.getElementById("homeButton").addEventListener("click",(()=>{d.innerHTML="",i.appendChild(e())}))})();