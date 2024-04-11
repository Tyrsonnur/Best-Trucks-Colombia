// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar-css");

// Get the offset position of the navbar
var sticky = navbar - css.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar - css.classList.add("sticky")
    } else {
        navbar - css.classList.remove("sticky");
    }
}