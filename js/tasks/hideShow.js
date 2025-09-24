const para = document.querySelector("p");
const hide = document.querySelector("#hide")
const show = document.querySelector("#show")
console.log(para)

loadEventListeners();

function loadEventListeners(){
    hide.addEventListener('click',hidePara)
    show.addEventListener('click',showPara)
}

function hidePara(){
    para.style.display = "none";
}
function showPara(){
    para.style.display = "block";
}

hidePara();