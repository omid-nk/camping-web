// burger menu mobile : remove&add nav__btn--open to html
const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".mobile-menu")

let navOpen = false;
navBtn.addEventListener("click",function(){
    if(navOpen){
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("mobile-menu--open")
        navOpen = false
    } else {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("mobile-menu--open")
        navOpen = true
    }
})

// like btn destination section
document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".place-card__heart");

    likeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("place-card__heart__icon--fill");
        });
    });
});