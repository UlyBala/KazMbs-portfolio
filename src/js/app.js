let burgerMenu = document.querySelector('.header__burger');
let closeBurgerMenu = document.querySelector('.nav__close');
let nav = document.querySelector('.nav');
let navInner = document.querySelector('.nav__inner');

burgerMenu.addEventListener('click', () => {
    nav.classList.add('nav_active')
    navInner.classList.add('nav_active')
})

closeBurgerMenu.addEventListener('click', () => {
    navInner.classList.remove('nav_active')
    nav.classList.remove('nav_active')
})

