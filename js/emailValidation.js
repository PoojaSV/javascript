function checkEmail() {
    var emailInput = document.getElementById("email").value;
    if(emailInput.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        document.getElementById("isEmail").innerHTML="VALID";
    }
    else {
        document.getElementById("isEmail").innerHTML="INVALID";
    }
}