const burgerMenu = document.querySelector(".burger-menu");

const burgerIcon = document.querySelector(".burger-menu .burger");
const xIcon = document.querySelector(".burger-menu .x");

burgerMenu.addEventListener("click", () => {
    const mobileNavigationOpenElement = document.querySelector(
        ".mobile-navigation.open"
    );

    if (mobileNavigationOpenElement !== null) {
        mobileNavigationOpenElement.classList.remove("open");
        burgerIcon.classList.add("show");
        xIcon.classList.remove("show");
    } else {
        const mobileNavigation =
            document.querySelector(".mobile-navigation");
        mobileNavigation.classList.add("open");
        burgerIcon.classList.remove("show");
        xIcon.classList.add("show");
    }
});
