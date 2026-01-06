const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseBUtton = document.querySelector("#menu-close-button");
const link1 = document.querySelector(".lien1");
const link2 = document.querySelector(".lien2");
const link3 = document.querySelector(".lien3");
const link4 = document.querySelector(".lien4");
const link5 = document.querySelector(".lien5");
const accueil = document.querySelector("#after-navbar");
const apropos= document.querySelector("#apropos");
const obp = document.querySelector("#objectif-competence-qualification");
const projet = document.querySelector("#projet");
const contact = document.querySelector("#contact");

menuOpenButton.addEventListener("click", () => {
    // Toogle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
})

menuCloseBUtton.addEventListener("click", () => {
    menuOpenButton.click();
})

link1.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
    accueil.classList.add("for-java");
})
link2.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
})
link3.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
})
link4.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
})
link5.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
})
