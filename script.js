const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = contactForm.querySelector(".form-message");
  const name = contactForm.elements.name.value.trim();
  message.textContent = `${name}님, 메시지를 확인했습니다. 곧 답변드릴게요!`;
  contactForm.reset();
});

const header = document.querySelector(".site-header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  header.classList.toggle("is-scrolled", currentScrollY > 20);
  header.classList.toggle("is-hidden", currentScrollY > lastScrollY && currentScrollY > 120);
  lastScrollY = currentScrollY;
});
