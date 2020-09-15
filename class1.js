/*
    TITLE : Understanding classes
    CREATED BY : Aashish Loknath Panigrahi 
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
const asxyzp = new Person('Aashish','Loknath','Panigrahi',85,'Masters','Brown','Indian');
const mogomogo = new Person('Meghna','Roy','Choudhury',65,'Masters','Brown','Indian');

console.log(`FULL NAME : ${asxyzp.firstName} ${asxyzp.middleName} ${asxyzp.lastName}`);
console.log(`IS asxyzp BROWN? ${asxyzp.isBrown()}`);
console.log(`IS asxyzp OBESE? ${asxyzp.isObese()}`);
console.log();
console.log(`FULL NAME : ${mogomogo.firstName} ${mogomogo.middleName} ${mogomogo.lastName}`);
console.log(`IS mogomogo BROWN? ${mogomogo.isBrown()}`);
console.log(`IS mogomogo OBESE? ${mogomogo.isObese()}`);

console.log(Person.setReligion());