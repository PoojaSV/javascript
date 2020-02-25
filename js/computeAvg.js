let studentMap = new Map();
studentMap.set("David", 80);
studentMap.set("Vinoth", 77);
studentMap.set("Divya", 88);
studentMap.set("Ishitha", 95);
studentMap.set("DaThomasvid", 68);
var sum = 0;
for (let marks of studentMap.values()) {
    sum += marks;
}
var result = sum / studentMap.size;
console.log(result);
var grade;
if(result >= 90 && result < 100) {
     grade = "A";
}
else if(result >= 80 && result < 90) {
    grade = "B";
}
else if(result >= 70 &&result < 80) {
    grade = "C";
}
else if(result >= 60 && result < 70) {
    grade = "D";
}
else if(result < 60) {
    grade = "F";
}
document.getElementById("finalgrade").innerHTML = grade;

