/*
    TITLE : Understanding subclasses
    CREATED BY : Aashish Loknath Panigrahi (@asxyzp) 
*/
class Person
{
    //Setting instance methods & instance properties
    constructor(firstName,middleName,lastName,weightInKg,highestDegree,skinColor,nationality){
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.weightInKg = weightInKg;
        this.highestDegree = highestDegree;
        this.skinColor = skinColor;
        this.nationality = nationality;
    }
    getFullName(){
        return `FULL NAME : ${this.firstName} ${this.middleName} ${this.lastName}`;
    }
    isBrown(){
        return this.skinColor.toUpperCase() == 'BROWN'?true:false;
    }
    isObese(){
        return this.weightInKg>=80?true:false;
    }

    //Setting static methods
    static setReligion(){

        return `SANATANA DHARMA`;
    }
}

class FunctionalPerson extends Person {
    constructor(firstName,middleName,lastName,weightInKg,highestDegree,skinColor,nationality,likesFood,likesQuantumPhysics){
        //Calls constructor of super class
        super(firstName,middleName,lastName,weightInKg,highestDegree,skinColor,nationality);
        this.likesFood=likesFood;
        this.likesQuantumPhysics=likesQuantumPhysics;
    }   
}

const asxyzp = new FunctionalPerson('Aashish','Loknath','Panigrahi',85,'Masters','Brown','Indian',true,false);
const mogomogo = new FunctionalPerson('Meghna','Roy','Choudhury',65,'Masters','Brown','Indian',true,true);
console.log(asxyzp);
console.log(mogomogo);