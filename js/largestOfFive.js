function findLargest() {
    var list = [];
    list.push(document.getElementById("num1").value);
    list.push(document.getElementById("num2").value);
    list.push(document.getElementById("num3").value);
    list.push(document.getElementById("num4").value);
    list.push(document.getElementById("num5").value);
    var result = 0;
    for (let i=0;i<list.length;i++) {
        if (list[i]>result) {
            result = list[i];
        }
    }
    document.getElementById("res").innerHTML=result;
};