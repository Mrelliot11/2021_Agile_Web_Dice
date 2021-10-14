function userLogin() {

    var username = "";
    var password = "";
    var usernameLength = "";
    var passwordLength = "";

    username = document.getElementById("userUsername");
    password = document.getElementById("userPassword");

    usernameLength = username.length;
    passwordLength = password.length;

    if (usernameLength >= 12 && passwordLength >= 12) {
        window.location = "index.html";
    } else {
        alert("Please make sure that the username and password you have entered are at least 12 characters long.");
    }
}