var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
let programmerObj=[];
for(let i of myObj) {
    if (i.occupation==="Programmer") {
        programmerObj.push(i);
    }
}
console.log(programmerObj);
let ageSorted=myObj.sort((a,b)=> a.age>b.age?-1:1);
console.log(ageSorted);

let occupationMap = new Map();
function NameAgeDetails(name, age) {
    this.name = name;
    this.age=age;
}
for(let i of myObj) {
    if (occupationMap.has(i.occupation)) {
        var nameAgeDetails = new NameAgeDetails(i.name, i.age);
        occupationMap.get(i.occupation).push(nameAgeDetails);
    }
    else {
        let nameAgeList = [];
        nameAgeDetails = new NameAgeDetails(i.name, i.age);
        nameAgeList.push(nameAgeDetails);
        occupationMap.set(i.occupation, nameAgeList);
    }
}
console.log(occupationMap);
var namelist=myObj.map(obj=>{
    return obj.name;
})

console.log(namelist);

let test=myObj.reduce((acc, obj) => {
    if(acc[obj.occupation]) {

        acc[obj.occupation].push({"name":obj.name,"age":obj.age});
    }
    else {
        acc[obj.occupation] = [{"name":obj.name,"age":obj.age}];
    }
    return acc;
},{})
console.log(test);
var a = 2, b =3 ;
console.log(a&&b);