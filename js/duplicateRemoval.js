function removeduplicate() {
    var inputArray = document.getElementById("duplicates").value.split(" ");
    var resultArray =[];
    resultArray.push(inputArray[0]);
    for (let i=0;i<inputArray.length;i++) {
        if (!resultArray.includes(inputArray[i])) {
            resultArray.push(inputArray[i]);
        }
    }
    document.getElementById("duplicateRemoved").innerHTML=resultArray;
}