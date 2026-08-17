/* ================= LOGIN ================= */

function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const error =
        document.getElementById("error");


    if (
        username === "mohtishim" &&
        password === "1234"
    ) {

        document
            .getElementById("loginPage")
            .style.display = "none";

        document
            .getElementById("portfolio")
            .style.display = "block";

        window.scrollTo(0, 0);

    } else {

        error.innerText =
            "Username ya password galat hai!";

    }

}


/* ================= LOADER ================= */

window.addEventListener("load", function() {

    setTimeout(function() {

        const loader =
            document.getElementById("loader");

        loader.classList.add("hide");

    }, 1200);

});


/* ================= FAVORITE PERSON ================= */

function openFavorite() {

    const modal =
        document.getElementById("favoriteModal");

    if (modal) {

        modal.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}


function closeFavorite() {

    const modal =
        document.getElementById("favoriteModal");

    if (modal) {

        modal.style.display = "none";

        document.body.style.overflow = "auto";

    }

}


/* Close popup outside */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("favoriteModal");

    if (event.target === modal) {

        closeFavorite();

    }

});


/* Close popup with ESC */

window.addEventListener("keydown", function(event) {

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


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-links a")
    .forEach(function(link) {

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


    if (
        document.body.classList.contains("light-mode")
    ) {

        button.innerText = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        button.innerText = "☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

}


/* Remember theme */

window.addEventListener("load", function() {

    const savedTheme =
        localStorage.getItem("theme");

    const button =
        document.getElementById("themeButton");


    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        if (button) {
            button.innerText = "🌙";
        }

    }

});


/* ================= SCROLL ANIMATION ================= */

function revealSections() {

    const reveals =
        document.querySelectorAll(".reveal");


    reveals.forEach(function(element) {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const visiblePoint = 100;


        if (
            elementTop <
            windowHeight - visiblePoint
        ) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealSections
);

window.addEventListener(
    "load",
    revealSections
);


/* ================= BACK TO TOP ================= */

window.addEventListener("scroll", function() {

    const topButton =
        document.getElementById("topButton");


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
