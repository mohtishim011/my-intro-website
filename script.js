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


/* ================= FAVORITE PERSON ================= */

function openFavorite() {

    document
        .getElementById("favoriteModal")
        .classList.add("show");

}


function closeFavorite() {

    document
        .getElementById("favoriteModal")
        .classList.remove("show");

}


/* Close popup when clicking outside */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("favoriteModal");

    if (event.target === modal) {

        closeFavorite();

    }

});


/* Close popup with ESC key */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeFavorite();

    }

});
