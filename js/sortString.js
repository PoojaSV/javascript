function sortString() {
    var str = document.getElementById("str").value;
    document.getElementById("sortString").innerHTML=str.split('').sort().join('');
}