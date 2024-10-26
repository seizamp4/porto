//navbar

const hamburger = document.querySelector('#burgir'); 
const navLink = document.querySelector('#nav-link');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navLink.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed')
    }   
};