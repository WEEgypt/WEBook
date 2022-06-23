var passwordHash = "835303514";
{
    init1: function Login() {
        var passwordInput = document.getElementById("login").value;
        var password = "";
        for (var i = 0; i < passwordInput.length; i++) {
            password = Math.abs(~~((password << 5) - password + passwordInput.charCodeAt(i)));
        }
        localStorage.setItem("login", password);
        if (localStorage.getItem("login") == passwordHash) {
            window.open("index.html", "_self");
        } else {
            document.getElementById("alert").style.display = "block";
        }
    }
    init2: function Check() {
        if (localStorage.getItem("login") != passwordHash) {
            window.open("LoginPage.html", "_self");
        }
    }
    init3: function CheckForLoginPageOnly() {
        if (localStorage.getItem("login") == passwordHash) {
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
