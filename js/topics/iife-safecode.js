(function (global, name){
    var greeting = "Hello";
    global.greeting = "Vanakamm";
    console.log(greeting + name);
})(window, "Ananth");

console.log(greeting);
greeting = "hey";
console.log(greeting);

