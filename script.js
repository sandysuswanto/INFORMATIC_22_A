// cari documen yang elemenya navbar-nav
const navbarNav = document.querySelector('.navbar-nav');

// cari documen yang elemenya menu
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const menu = document.querySelector('#menu');
document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})
