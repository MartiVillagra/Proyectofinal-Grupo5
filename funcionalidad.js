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

