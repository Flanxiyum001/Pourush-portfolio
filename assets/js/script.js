const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode")
    ? "Dark Mode"
    : "Light Mode";
});
// Scroll-triggered animation for sections
const sections = document.querySelectorAll('.section');

const handleScroll = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleScroll);

// Initial check for animations on page load
handleScroll();
