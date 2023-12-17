document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");

    // Add a scroll event listener
    window.addEventListener("scroll", function () {
        // Add a class to the navbar when scrolling down
        if (window.scrollY > 500) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });
});