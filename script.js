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

function showDetails(title, description, imageUrl) {
    document.getElementById('food-title').innerText = title;
    document.getElementById('food-description').innerText = description;
    document.getElementById('food-image').src = imageUrl;
    document.getElementById('food-details-modal').style.display = 'block';
}
function closeDetails() {
    document.getElementById('food-details-modal').style.display = 'none';
}   

