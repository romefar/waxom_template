const header = document.querySelector('.header');
const slider = document.querySelector('.slider');
const headerMenu = document.querySelector('.header-menu');
const headerBurger = document.querySelector('.header__burger');
const headerMenuAdaptive = document.querySelector('.header__menu-adaptive');

window.addEventListener('scroll', (e) => {
    if(window.pageYOffset > slider.offsetHeight) { 
        header.classList.add('header-scrolled');
    } else header.classList.remove('header-scrolled');

    if(headerMenuAdaptive.classList.contains('header-highlited') && window.pageYOffset > slider.offsetHeight ) { 
        headerMenuAdaptive.classList.remove('header-highlited')
    }
});

// CHROME ONLY
headerMenu.addEventListener('click', (e) => { 
    if(e.target.matches('a[href^="#"]')) { 
        e.preventDefault();
        if(window.innerWidth < 767) { 
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            headerMenuAdaptive.classList.toggle('header__menu-adaptive-visible');
        } else { 
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        }
    }
});

headerBurger.addEventListener('click', (e) => {    
    headerMenuAdaptive.classList.toggle('header__menu-adaptive-visible'); 
    headerMenuAdaptive.classList.add('header-highlited');
}); 