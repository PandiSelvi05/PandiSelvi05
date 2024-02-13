  function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementBy.Id("password").value;

 var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementBy.Id("passwordError");

var isValid = true;
usernameError.innerHTML = "";
passwordError.innerHTML = "";

if(username.trim()=== ""){
usernameError.innerHTML = "username is required";
isValid=false;
}
if(password.trim()=== ""){
passwordError.innerHTML = "password is required";
isValid=false;
}

if (isValid){
alert("form login successfully!");
document.getElementById("login").reset();
}
}