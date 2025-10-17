// Simple animation for header - glassy text effect on load
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  header.style.transition = "box-shadow 1s";
  header.style.boxShadow = "0 0 18px #39c9b3";
  setTimeout(() => {
    header.style.boxShadow = "0 0 8px #5eead4";
  }, 1100);
});
