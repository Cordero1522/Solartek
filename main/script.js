// Toggle del menú móvil
document.getElementById('mobileToggle').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// Manejo del formulario
document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Recopilar datos del formulario
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        municipio: document.getElementById('municipio').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    // Aquí normalmente enviarías los datos a Google Sheets
    // usando Google Apps Script o una API
    // Ejemplo de integración con Google Sheets Apps Script:
    // fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    // })
    
    // Simulación de envío exitoso
    alert('¡Gracias por tu solicitud! Te contactaremos en un plazo de 24-48 horas.');
    
    // Limpiar formulario
    document.getElementById('quoteForm').reset();
    
    // Scroll suave a la sección de inicio
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Añadir clase de scroll al header para efectos de scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    }
});