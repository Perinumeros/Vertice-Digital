// CONFIGURAÇÃO: troque pelo WhatsApp do cliente, com código do país e DDD.
// Exemplo: 5511999999999 (não use +, espaços ou traços).
const WHATSAPP_NUMBER = "5511999999999";

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".product-order").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    openWhatsApp(`Olá! Tenho interesse no produto: ${product}. Pode me passar mais informações?`);
  });
});

document.getElementById("main-whatsapp").addEventListener("click", (event) => {
  event.preventDefault();
  openWhatsApp("Olá! Gostaria de conhecer melhor os produtos da Vitrine Urbana.");
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});
