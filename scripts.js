document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {

        menuToggle.addEventListener('click', function() {
            const isOpen = navMenu.classList.contains('open');
            navMenu.classList.toggle('open');

            menuToggle.setAttribute('aria-expanded', !isOpen);
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {

                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }


    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', function() {

            const newLang = this.getAttribute('data-lang');
            
            let targetFile = 'index.html'; 
            
            if (newLang === 'en') {
                targetFile = 'index_en.html'; 
            } 
            

            window.location.href = targetFile;
        });
    });
    

    const url = window.location.href;
    const esOption = document.getElementById('lang-es');
    const enOption = document.getElementById('lang-en');
    
    if (url.includes('index_en.html') && enOption) {

        esOption.classList.remove('active');
        enOption.classList.add('active');
    } else if (esOption) {

        esOption.classList.add('active');
        enOption.classList.remove('active');
    }


    const projectDiagram = document.querySelector('.project-diagram');

    if (projectDiagram) {

        let imageOverlay = document.getElementById('image-overlay');
        if (!imageOverlay) {
            imageOverlay = document.createElement('div');
            imageOverlay.id = 'image-overlay';
            imageOverlay.className = 'image-overlay';
            document.body.appendChild(imageOverlay);
        }

        projectDiagram.addEventListener('click', function() {

            const clonedImage = this.cloneNode(true); 
            clonedImage.classList.add('enlarged'); 
            clonedImage.classList.remove('project-diagram'); 
            

            imageOverlay.innerHTML = ''; 
            imageOverlay.appendChild(clonedImage);
            imageOverlay.classList.add('active'); 


            document.body.style.overflow = 'hidden'; 
        });


        imageOverlay.addEventListener('click', function(event) {

            if (event.target.classList.contains('enlarged') || event.target.id === 'image-overlay') { 
                imageOverlay.classList.remove('active');
                document.body.style.overflow = ''; 
            }
        });
    }
});
