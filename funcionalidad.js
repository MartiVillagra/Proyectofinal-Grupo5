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

// Funcionalidad del formulario con validaciones y EMAILJS
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contacto-form");
    const mensaje = document.getElementById("mensaje-formulario");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        mensaje.innerHTML = "";
        mensaje.style.color = "red";

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const presentacion = document.getElementById("presentacion").value.trim();
        const acepto = document.getElementById("acepto").checked;

        // VALIDACIONES
        if (nombre === "") {
            mensaje.innerHTML = "El nombre es obligatorio.";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mensaje.innerHTML = "El correo electrónico no es válido.";
            return;
        }

        if (!acepto) {
            mensaje.innerHTML = "Debes aceptar compartir tu información.";
            return;
        }

        // Si todo está bien
        mensaje.style.color = "#555";
        mensaje.innerHTML = "Enviando...";

        try {
            const formData = new FormData(form);

            const response = await fetch("/", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                mensaje.style.color = "green";
                mensaje.innerHTML = "Formulario enviado correctamente. ¡Gracias por escribirnos!";
                form.reset();
            } else {
                throw new Error("Error al enviar");
            }

        } catch (error) {
            mensaje.style.color = "red";
            mensaje.innerHTML = "Hubo un error al enviar el formulario. Intenta de nuevo.";
            console.error(error);
        }
    });
});

// Funcionalidad de links a instagram de carrusel y footer
document.addEventListener("DOMContentLoaded", () => {

    // FOOTER
    const footerInsta = document.querySelector(".footer-instagram");
    if (footerInsta) {
        footerInsta.addEventListener("click", () => {
            const url = footerInsta.getAttribute("data-url");
            window.open(url, "_blank");
        });
    }

    // MODELOS DEL CARRUSEL
    const modelosLinks = document.querySelectorAll(".model-link");

    modelosLinks.forEach(item => {
        item.addEventListener("click", () => {
            const url = item.getAttribute("data-url");
            window.open(url, "_blank");
        });
    });

//Funcionalidad del boton de retorno al inicio y que se oculte en el Hero
document.addEventListener("DOMContentLoaded", () => {

    const hero = document.getElementById("hero");
    const btnWsp = document.getElementById("btn-wsp");
    const btnTop = document.getElementById("btn-top");

    const botones = [btnWsp, btnTop];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // Cuando el HERO ya no se ve → mostrar botones
                botones.forEach(b => b.classList.add("visible"));
                botones.forEach(b => b.classList.remove("oculto"));
            } else {
                // Cuando el HERO está en pantalla → ocultar
                botones.forEach(b => b.classList.remove("visible"));
                botones.forEach(b => b.classList.add("oculto"));
            }
        });
    }, { threshold: 0.1 });

    observer.observe(hero);

    // Función de subir al inicio
    btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});