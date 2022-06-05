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
    init3: function CheckForLoginPageOnly() {
        if (localStorage.getItem("login") == Password) {
            window.open("index.html", "_self");
        }
    }
}
function Logout() {
    localStorage.setItem("login", "");
}
function SetFocus() {
    document.getElementById("login").focus();
}
function PressEnterToLogin() {
    if (event.which == 13 || event.keyCode == 13) {
        Login();
    }
}
window.onscroll = function () {
    if (window.pageYOffset < 10) {
        document.getElementById("logout").style.top = "15px";
    } else {
        document.getElementById("logout").style.top = "-50px";
    }
};
function More() {
    if (more.style.display === "none") {
        more.style.display = "block";
    } else {
        more.style.display = "none";
    }
}
