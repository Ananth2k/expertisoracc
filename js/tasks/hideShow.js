const para = document.querySelector('p');
const hide =  document.querySelector("#hide");
const show =  document.querySelector("#show");


function EventListener(){
    hide.addEventListener('click', tohide);
    show.addEventListener('click', toshow);
}

function tohide(){
    para.style.display = "none"
}
function toshow(){
    para.style.display = "block"
}

EventListener()