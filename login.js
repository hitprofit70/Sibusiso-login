function inputTwousers() {
    usernameS = document.getElementById('usernames').value
    passwordS = document.getElementById('passwords').value
}

function clearUsers() {
    document.getElementById('usernames').value = '';
    document.getElementById('passwords').value = '';
}



function addButton() {
    inputTwousers();
    clearUsers();

    if (usernameS == "admins" && passwordS == "users") {
      
        
        alert("Login sucessfully");
        return false;

    } else {
        alert("Login failed");
    }
}