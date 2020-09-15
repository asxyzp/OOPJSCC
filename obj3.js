/*
    TITLE : Creating objects using constructor
    CREATED BY : Aashish Loknath Panigrahi (@asxyzp)
*/

//Creating an object constructor using function
function Person (firstName,middleName,lastName,weightInKg,highestDegree,skinColor,nationality) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.weightInKg = weightInKg;
    this.highestDegree = highestDegree;
    this.skinColor = skinColor;
    this.nationality = nationality;
    this.fullName = function(){
        return `FULL NAME : ${this.firstName} ${this.middleName} ${this.lastName}`;
    };
    this.isBrown = function(){
        if(this.skinColor.toUpperCase()=='BROWN'){
            return true;
        }
        else{
            return false;
        }
    }
}

const asxyzp = new Person('Aashish','Loknath','Panigrahi',85,'Masters','Brown','Indian');
const mogomogo = new Person('Meghna','Roy','Choudhury',65,'Masters','Brown','Indian');
console.log(asxyzp);
console.log(mogomogo);

//Every object has it's own prototype
//In this case the prototype is Person {}
console.log(asxyzp.__proto__);
console.log(mogomogo.__proto__);

//In this case the prototype is null
const nullObject = Object(null);
console.log(nullObject.__proto__);

//Calling a function/method within a function
console.log(asxyzp.fullName());
console.log(mogomogo.fullName());
console.log(`IS asxyzp BROWN? ${asxyzp.isBrown()}`);
console.log(`IS mogomogo BROWN? ${mogomogo.isBrown()}`);

//Using prototypes to create functions
Person.prototype.isFatAss = function(){
    if(this.weightInKg>=80)
        return true;
    else    
        return false;
};
console.log(`IS asxyzp FATASS? ${asxyzp.isFatAss()}`);
console.log(`IS mogomogo FATASS? ${mogomogo.isFatAss()}`);