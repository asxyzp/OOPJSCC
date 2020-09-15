/*
    TITLE : Understanding prototypal inheritance
    CREATED BY : Aashish Loknath Panigrahi (@asxyzp)
*/

//Basic example prototypal inheritance
let admin = {
    hasCRUDPrivileges : true
};
let user = {
    userID : 'asxyzp',
    password : 'psswrd',
}
//user doesn't has admin CRUD priviliges
console.log(admin.__proto__, user.__proto__);

//user doesn't has admin CRUD priviliges
user.__proto__=
console.log(admin.__proto__, user.__proto__);
console.log(user.userID,user.userID,user.hasCRUDPrivileges);