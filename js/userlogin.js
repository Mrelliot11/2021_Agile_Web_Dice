/*jslint browser: true*/
/*global window */
/*devel: true*/

function userLogin() {
    "use strict";

    var username = document.getElementById('userUsername').value;
    var password = document.getElementById('userPassword').value;

    var currentWindow = window;

    if (username.length >= 6 && password.length >= 6) {
        currentWindow.location.href = "diceroll.html";
    } else {
        window.alert("Please make sure that the username and password you have entered are at least 6 characters long.");
    }

}