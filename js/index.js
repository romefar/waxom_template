
const header = document.querySelector('.header');

function toggleScrollHeader(e) {
    let top = document.querySelector('.slider').offsetHeight;
    if(window.pageYOffset > top) { 
        header.classList.add('header-scrolled');
    } else header.classList.remove('header-scrolled')
} 

// window.addEventListener('resize', () => {
//     if(window.innerWidth < 767) {
//         window.removeEventListener(toggleScrollHeader);
//     } else { 
        window.addEventListener('scroll', toggleScrollHeader);
//     }
// })


// CHROME ONLY
document.querySelectorAll('.header-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        if(window.innerWidth < 767) { 
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            document.querySelector('.header__menu-adaptive').classList.toggle('header__menu-adaptive-visible');
        } else { 
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.querySelector('.header__burger').addEventListener('click', (e) => {    
    document.querySelector('.header__menu-adaptive').classList.toggle('header__menu-adaptive-visible');
}); 