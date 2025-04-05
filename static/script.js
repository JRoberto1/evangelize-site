// Mostra ou esconde o menu de navegação no mobile
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Alerta simples ao enviar o formulário de contato
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    contactForm.reset();
  });
}
