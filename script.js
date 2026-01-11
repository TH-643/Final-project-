document.addEventListener('DOMContentLoaded', () => {
  
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 }); 

    revealElements.forEach(el => {
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `
        .reveal-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .reveal-on-scroll.is-revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);


    
    const lightModeToggle = document.getElementById('view-light');
    const darkModeToggle = document.getElementById('view-dark');

    lightModeToggle.addEventListener('change', () => {
        if (lightModeToggle.checked) {
            console.log('Light Mode selected');
            
        }
    });

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            console.log('Dark Mode selected');
        }
    });

});