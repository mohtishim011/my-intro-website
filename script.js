function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const error =
        document.getElementById("error");


    if (username === "mohtishim" && password === "1234") {

        document.getElementById("loginPage").style.display = "none";

        document.getElementById("portfolio").style.display = "block";

        window.scrollTo(0, 0);

    } else {

        error.innerText =
            "Username ya password galat hai!";
    }
}


/* ================= MOTIIIIIII POPUP ================= */

function openFavorite() {

    const modal = document.getElementById("favoriteModal");

    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

}


function closeFavorite() {

    const modal = document.getElementById("favoriteModal");

    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

}


/* Close when clicking outside the popup */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("favoriteModal");

    if (event.target === modal) {
        closeFavorite();
    }

});


/* Close with ESC key */

window.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeFavorite();
    }

});
