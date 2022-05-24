var Password = "123";
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
