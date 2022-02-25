const nav = document.querySelector(".primary-navigation");
const hamburger = document.querySelector(".mobile-nav-toggle");

hamburger.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        hamburger.setAttribute("aria-expanded", true);
    }
    else {
        nav.setAttribute("data-visible", false);
        hamburger.setAttribute("aria-expanded", false);
    }
})