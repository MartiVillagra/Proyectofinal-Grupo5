//Funcionalidad de desplazamiento suave para la navegación
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('a[data-section]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            const sectionId = document.getElementById(section);
            if (sectionId) {
                sectionId.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Funcionalidad del boton de Hero principal


function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' 
                });
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', enableSmoothScroll);