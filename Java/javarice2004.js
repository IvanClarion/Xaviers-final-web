const sections = document.querySelectorAll('.slide-up');


function checkScroll() {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;


        if (sectionTop < windowHeight * 1.0) {

            section.classList.add('active');

        } else {

            section.classList.remove('active');

        }

    });

}


window.addEventListener('scroll', checkScroll);

window.addEventListener('load', checkScroll);

