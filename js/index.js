const header = document.querySelector('.header');

function toggleScrollHeader(e) {
    let top = document.querySelector('.slider').offsetHeight;
    if(window.pageYOffset > top) { 
        header.classList.add('header-scrolled');
    } else header.classList.remove('header-scrolled')   
} 

// window.addEventListener('scroll', toggleScrollHeader);


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
    // if(window.pageYOffset < document.querySelector('.slider').offsetHeight) { 
    //     if(header.classList.contains('header-scrolled') && window.pageYOffset < document.querySelector('.slider').clientHeight) {
    //        header.classList.remove('header-scrolled');
    //     } else header.classList.add('header-scrolled');
    // } 
    document.querySelector('.header__menu-adaptive').classList.toggle('header__menu-adaptive-visible'); 
}); 