var Password = "sohag@123";
{
    init1: function Login() {
        localStorage.setItem("login", document.getElementById("login").value);
        if (localStorage.getItem("login") == Password) {
            window.open("index.html", "_self");
        } else {
            document.getElementById("alert").style.display = "block";
        }
    }
    init2: function Check() {
        if (localStorage.getItem("login") != Password) {
            window.open("LoginPage.html", "_self");
        }
    }
}
function Logout() {
    localStorage.setItem("login", "");
    window.location.reload();
}
function SetFocus() {
    document.getElementById("login").focus();
}
function PressEnterToLogin() {
    if (event.which == 13 || event.keyCode == 13) {
        Login();
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("logout").style.top = "15px";
    } else {
        document.getElementById("logout").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
};
