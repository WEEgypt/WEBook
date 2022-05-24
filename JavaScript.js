var Password = "sohag@123";
{
    init1: function Login() {
        sessionStorage.setItem("login", document.getElementById("login").value);
        if (sessionStorage.getItem("login") == Password) {
            window.open("index.html", "_self");
        } else {
            document.getElementById("alert").style.display = "block";
        }
    }
    init2: function Check() {
        if (sessionStorage.getItem("login") != Password) {
            window.open("LoginPage.html", "_self");
        }
    }
}
function SetFocus() {
    document.getElementById("login").focus();
}
function PressEnterToLogin() {
    if (event.which == 13 || event.keyCode == 13) {
        Login();
    }
}
