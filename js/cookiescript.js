function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    // Loop through the array elements, there is only one but this is useful if more are added
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return cookiePair[1];
        }
    }
    // Return null if not found
    return null;
}

function checkCookie() {
    // Get cookie using our custom function
    var userName = getCookie("username");
    console.log(userName);
    var cookieText = document.getElementById('usernameText');
    cookieText.innerHTML = userName;
    }

checkCookie();