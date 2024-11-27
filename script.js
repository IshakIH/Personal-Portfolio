/* -------------------------- toggle navbar icon -------------------- */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* -------------------------- scrool section active link -------------------- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.foreach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
         
        if(top >= offset && top < offset + height) {
            navLinks.foreach.apply(links => {
                links.classList.remove('active');
                document.querySelector('hearder nav a [href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration:2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content,heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ',{origin: 'bottom'});
ScrollReveal().reveal('.home-contract h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contract p, .about-content', {origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Full-stuck developer', 'Competitive Programmer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

