var a = document.querySelector("main")

var crsr = document.querySelector("#cursor")

addEventListener("mousemove", function (dets) {
    console.log(dets.x)
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})


/* JavaScript for toggling the menu */
document.addEventListener("DOMContentLoaded", function() {
    const menuLogo = document.querySelector(".menu-logo");
    const navLinks = document.querySelector("nav ul");
    
    menuLogo.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});

