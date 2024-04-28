var x = document.getElementById("login");
var y = document.getElementById("register");

function login(){
    x.style.left = "4px";
    y.style.right = "520px";
}

function backtologin(){
    x.style.left = "4px";
    y.style.right = "520px";
}

function register() {
    x.style.left = "-510px";
    y.style.right = "4px";
}
function tohome() {
    window.location.href = "index.html";
}