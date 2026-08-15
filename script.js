function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const error =
        document.getElementById("error");


    // Demo login
    if (username === "mohtishim" && password === "1234") {

        document.getElementById("loginPage").style.display = "none";

        document.getElementById("portfolio").style.display = "block";

        window.scrollTo(0, 0);

    } else {

        error.innerText =
            "Username ya password galat hai!";
    }
}
