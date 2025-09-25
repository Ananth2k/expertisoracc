function greet(firstname){
    return function(name){
        console.log(firstname+ " "+ name)
    }
}

let sayHi =  greet("hey")
console.log(sayHi)
sayHi("ananth")