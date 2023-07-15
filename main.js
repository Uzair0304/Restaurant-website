const navLinks = document.querySelector(".nav_links")
const menuBtn = document.querySelector(".menu_btn")


menuBtn.addEventListener("click", function(){
    navLinks.classList.toggle("show")
})