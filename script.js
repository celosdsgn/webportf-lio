const cards = document.querySelectorAll(
    ".service-card, .stack-card, .education-card, .about, .contact"
);

cards.forEach((card) => {
    card.style.opacity = "1";
    card.style.transform = "none";
    card.style.transition = "none";
});