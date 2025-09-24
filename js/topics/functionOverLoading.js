console.log("this is function overloading");



function greet(firstName, lastName, lan){
    return (firstName + " "+ lastName +" "+ lan)
}

function tamilGreet(langauge){
    return greet("Ananth", "Bala", langauge);
}
function engGreet(langauge){
    return greet("Ananth", "Bala", langauge);
}

console.log(tamilGreet("tamizh"));
console.log(engGreet("English"));