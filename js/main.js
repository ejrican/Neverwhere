/* Open mobile menu when clicking on the D&D logo menu button */
const hamburger = document.querySelector("#mobile-nav");
const close = document.querySelector("#close-mobile-nav")
const nav = document.querySelector("#NavMenu");


hamburger.addEventListener("click",() => {
    nav.classList.add("open-nav")
})

close.addEventListener("click",() => {
    nav.classList.remove("open-nav")
})

/* Close mobile Menu when clicking on a menu item */ 
const hideMobileMenu = () => {

    if (window.innerWidth <= 920) {
      nav.classList.remove("open-nav");
    }
};
    nav.addEventListener("click", hideMobileMenu);