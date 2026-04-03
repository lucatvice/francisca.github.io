document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar: Menú móvil Toggle
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');
    
    if(menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Cerrar el menú al hacer click en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Navbar: Cambio de estilo al hacer scroll (Sticky)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.8rem 5%';
            navbar.style.boxShadow = 'var(--shadow-hover)';
            navbar.style.backgroundColor = 'rgba(249, 249, 249, 0.98)';
        } else {
            navbar.style.padding = '1.2rem 5%';
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = '1px solid rgba(141, 119, 95, 0.1)';
            navbar.style.backgroundColor = 'rgba(249, 249, 249, 0.95)';
        }
    });

    // 3. Detalles Técnicos: Acordeón
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            
            // Si el ítem ya estaba activo, lo cerramos
            if (accordionItem.classList.contains('active')) {
                accordionItem.classList.remove('active');
                accordionItem.querySelector('.accordion-content').style.maxHeight = null;
                return;
            }

            // Primero cerramos los demás
            document.querySelectorAll('.accordion-item').forEach(item => {
                if(item !== accordionItem) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                }
            });
            
            // Y abrimos el clickeado
            accordionItem.classList.add('active');
            const content = header.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        });
    });

    // 4. Animaciones de Entrada "Fade-in-up" en el Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Solo animar la primera vez
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });

    // 5. Pequeño efecto en carrito y botones (prevención por defecto si no tienen links válidos)
    document.querySelector('.cart-icon').addEventListener('click', () => {
        alert("El carrito se abrirá aquí próximamente.");
    });
});
