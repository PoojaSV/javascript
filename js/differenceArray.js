function differenceArray() {
    var arr1 = document.getElementById("arrayone").value.split(" ");
    var arr2 = document.getElementById("arraytwo").value.split(" ");
    let difference = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
    document.getElementById("finalArray").innerHTML=difference;
}