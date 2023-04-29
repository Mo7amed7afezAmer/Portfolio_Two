

// ============================= theme colors =========
const themeColorBox = document.querySelector(".theme-colors");
themeColorBox.querySelector(".color-switcher").addEventListener("click", () => {
    themeColorBox.classList.toggle("open")
});
window.addEventListener("scroll", () => {
    themeColorBox.classList.remove("open")
})

// =========================== color switcher style ==============
const alternateStyles = document.querySelectorAll(".alternate-color");
function setActiveStyle (color) {
    alternateStyles.forEach((s) => {
        if (color == s.getAttribute("color-flag")) {
            s.removeAttribute("disabled");
        } else {
            s.setAttribute("disabled", true);
        }
    });
}

// ============ theme light and dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", function () {
    this.querySelector("i").classList.toggle("fa-sun");
    this.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
});
window.addEventListener("load", function () {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun")
        dayNight.querySelector("i").classList.remove("fa-moon")
        console.log("dark mode")
    } else {
        dayNight.querySelector("i").classList.add("fa-moon")
        dayNight.querySelector("i").classList.remove("fa-sun")
    }
});



// ====================== typing animation depends on typed library ==========
var typed = new Typed(".typing", {
    strings: ["", "web designer", "web development", "cms wordpress", "information about  back end"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true

})


// jquery library
$(document).ready(function () {

    // data toggler
    $("[data-toggler]").click(function () {

        $(this).addClass("open").siblings().removeClass("open");
        $($(this).data("toggler")).addClass("open").siblings().removeClass("open");

        console.log($(this).data("toggler"));
    });

});
