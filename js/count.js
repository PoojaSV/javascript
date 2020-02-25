function count() {
    var str1=document.getElementById("str1").value;
    var str2=document.getElementById("str2").value;
    document.getElementById("count").innerHTML=str1.split(str2).length - 1;
}