var todayDate = new Date();
var month = todayDate.getMonth() <= 9 ? "0"+todayDate.getMonth() : todayDate.getMonth();
var date = todayDate.getDate() <= 9 ? "0"+todayDate.getDate() : todayDate.getDate();
var today = month + "/" + date + "/" + todayDate.getFullYear();
document.getElementById("dateValue").innerHTML=today;