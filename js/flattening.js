var myObj = [5, [22], [[14]], [[4]],[5,6]];
const arr = myObj;
console.log(arr.flat(Infinity));
document.getElementById("flatRes").innerHTML=arr;