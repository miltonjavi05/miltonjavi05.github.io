// Ejemplo de código para desplazamiento automático
window.addEventListener("load", function() {
  // Desplazamiento automático al hacer clic en los enlaces de navegación
  const links = document.querySelectorAll("nav a");
  for (const link of links) {
    link.addEventListener("click", scrollToSection);
  }

  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth"
    });
  }

  // Otros efectos que desees agregar...
});
