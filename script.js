// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;
    if (window.pageYOffset > navbarFixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// // navbar change color
// window.onscroll = function () {
//     const header = document.querySelector('header');
//     header.style.background
// }

const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');
humberger.addEventListener('click', function () {
    humberger.classList.toggle('active');
    navMenu.classList.toggle('hidden');
});