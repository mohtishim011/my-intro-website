/* ================= LOGIN ================= */

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

        error.innerText = "";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        error.innerText =
            "Username ya password galat hai!";

    }
}


/* ================= FAVORITE PERSON ================= */

function openFavorite() {

    const modal =
        document.getElementById("favoriteModal");

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closeFavorite() {

    const modal =
        document.getElementById("favoriteModal");

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}


/* Close popup by clicking outside */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("favoriteModal");

    if (event.target === modal) {

        closeFavorite();

    }

});


/* Close popup using ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeFavorite();

    }

});


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const navLinks =
        document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});


/* ================= DARK / LIGHT MODE ================= */

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const button =
        document.getElementById("themeButton");

    if (document.body.classList.contains("light-mode")) {

        button.innerText = "🌙";

        localStorage.setItem("theme", "light");

    } else {

        button.innerText = "☀️";

        localStorage.setItem("theme", "dark");

    }

}


/* Remember selected theme */

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    const themeButton =
        document.getElementById("themeButton");

    if (themeButton) {

        themeButton.innerText = "🌙";

    }

}


/* ================= SCROLL REVEAL ================= */

function revealSections() {

    const reveals =
        document.querySelectorAll(".reveal");

    reveals.forEach(function(element) {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


/* ================= BACK TO TOP ================= */

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


function goTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
