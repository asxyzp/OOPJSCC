/*
    TITLE : Understanding objects (1)
    SOURCE : javascript.info (https://javascript.info/object)
    CREATED BY Aashish Loknath Panigrahi (@asxyzp)
*/

//Objects can be assigned to const
const asxyzpDetails = new Object();

//Adding object properties through bracket notation
asxyzpDetails['FirstName']='Aashish';
asxyzpDetails['MiddleName']='Loknath';
asxyzpDetails['LastName']='Panigrahi';
asxyzpDetails['YOB']=1996;
asxyzpDetails['CurrentlyStudying']=true;
if(asxyzpDetails['CurrentlyStudying']){
    asxyzpDetails['CourseName']='M.Sc. in Industrial Mathematics & Computer Applications';
}
asxyzpDetails["allDetails"] = () =>{
    for(key in asxyzpDetails){
        console.log(`${key}:${asxyzpDetails[key]}`);
    }
};

//Adding object properties through dot notation
asxyzpDetails.InRelationship=false;
asxyzpDetails.CrushName='MogoMogo';
//asxyzpDetails.allDetails();
console.log(`KEYS OF OBJECTS : ${Object.keys(asxyzpDetails)}`);
console.log(`VALUES OF OBJECTS : ${Object.values(asxyzpDetails)}`);

//Deleting object properties through bracket notation
delete asxyzpDetails['InRelationship'];

//Deleting object properties through dot notation
delete asxyzpDetails.CrushName;
//console.log(asxyzpDetails);

//Integer propeties are ordered in objects (only by key values)
const oneToTen = {};
for(let i=10;i>=0;i--){
    oneToTen[i+'']=i;
}
//console.log(oneToTen);

const oneToFive = {};
oneToFive['four']=4;
oneToFive['one']=1;
oneToFive['two']=2;
oneToFive['five']=5;
oneToFive['three']=3;
//console.log(oneToFive);