function Person(firstName, latsName){
    this.firstName = firstName;
    this.latsName = latsName;
}

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.latsName;
}

const ananth = new Person("Ananth", "Bala");

console.log(ananth);

console.log(ananth.getFullName());
