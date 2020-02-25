function resultdisplay() {
    debugger;
    var inputValue = document.getElementById("inputValue").value;
    var result = inputValue[0];
    for(let i=0;i<inputValue.length-1;i++) {
        if(inputValue[i]==0) {
            result=result+"-"+inputValue[i+1];
        }
        else if(inputValue[i]%2==0 && inputValue[i+1]%2==0) {
            result=result+"-"+inputValue[i+1];
        }
        else {
            result=result+inputValue[i+1];
        }
    }
    document.getElementById("resValue").innerHTML= result;
};