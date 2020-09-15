/*
    TITLE : Understanding objects (2)
    SOURCE : Traversy Media
    CREATED BY : Aashish Loknath Panigrahi (@asxyzp)
*/

//In JavaScript, there are primitive types & Objects
const name1 = 'asxyzp';
const name2 = new String('asxyzp');

//When we use higher order functions on primitive types then it uses a wrapper function to generate value
console.log(name1.toString());
console.log(name2.toString());

console.log(typeof name1);  //String
console.log(typeof name2);  //Object