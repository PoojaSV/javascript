function ascendingAndDescendingOrder() {
    debugger;
    var inputArray = document.getElementById("stringInput").value.split(" ");
    var ascending = inputArray.sort();
    document.getElementById("ascendingOrder").innerHTML=ascending;
    var descending = inputArray.reverse();
    document.getElementById("descendingOrder").innerHTML=descending;
}