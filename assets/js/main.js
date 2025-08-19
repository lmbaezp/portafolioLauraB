/* global Swiper */

/**
   * Animation on scroll function and init
   */
function aosInit() {
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', aosInit);

/**
 * Init typed.js
 */
const selectTyped = document.querySelector('.typed');
if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

/**
* Change of screen content
**/
window.addEventListener("load", () => {
    const preloader = document.getElementById("hero");
    const main = document.getElementById("main-section");

    preloader.style.display = "block";

    setTimeout(() => {
        preloader.classList.add('fade-out'); // activamos la transición
        setTimeout(() => {
            if (preloader) {
                preloader.remove();
            }
            main.classList.remove('d-none');
            document.body.style.overflow = 'auto';
        }, 1000); // mismo tiempo que en CSS
    }, 2000);
});

/**
* Animate the skills items on reveal
**/
let skillsAnimation = document.querySelectorAll('.skills-animation');

skillsAnimation.forEach((item) => {
    new Waypoint({
        element: item,
        offset: '80%',
        handler: function () {
            let progress = item.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
                el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
        }
    });

    // Si ya está visible al cargar, animar directamente
    if (item.getBoundingClientRect().top < window.innerHeight) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
    }
});

/**
* Swiper
**/
// Esperar a que todo esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado');
    
    if (typeof Swiper !== 'undefined') {
        console.log('Swiper existe');
        
        const swiperElement = document.querySelector('.mySwiper');
        if (swiperElement) {
            console.log('Elemento encontrado');
            
            var swiper = new Swiper(".mySwiper", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                }
            });
            
            console.log('Swiper inicializado');
        } else {
            console.log('ERROR: No se encontró .mySwiper');
        }
    } else {
        console.log('ERROR: Swiper no está disponible');
    }
});