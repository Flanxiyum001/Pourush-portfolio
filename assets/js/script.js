// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode")
    ? "Dark Mode"
    : "Light Mode";
});

// JavaScript to toggle the chat bot visibility
document.getElementById('contactBtn').addEventListener('click', function() {
  var chatBot = document.getElementById('chatBot');
  if (chatBot.style.display === 'none' || chatBot.style.display === '') {
    chatBot.style.display = 'block';
  } else {
    chatBot.style.display = 'none';
  }
});

// JavaScript for Preloader Timer
document.addEventListener('DOMContentLoaded', function() {
  var digit1 = document.getElementById('digit1');
  var digit2 = document.getElementById('digit2');
  var digit3 = document.getElementById('digit3');
  var count = 0;
  var interval = setInterval(function() {
    var countStr = count.toString().padStart(3, '0');
    digit1.innerText = countStr.charAt(0);
    digit2.innerText = countStr.charAt(1);
    digit3.innerText = countStr.charAt(2);
    count++;
    if (count > 100) {
      clearInterval(interval);
      setTimeout(function() {
        document.getElementById('digit1').classList.add('slide-up');
      }, 0); // No delay for the first slide
      setTimeout(function() {
        document.getElementById('digit2').classList.add('slide-up');
      }, 1000); // 1-second gap
      setTimeout(function() {
        document.getElementById('digit3').classList.add('slide-up');
      }, 2000); // 1-second gap after second digit
      setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('mainContent').classList.remove('hidden');
      }, 3000); // Delay to allow all slides to open
    }
  }, 40); // 4000ms/100 = 40ms per count
});

// Smooth Section Transitions
document.addEventListener('scroll', function() {
  document.querySelectorAll('section').forEach(section => {
    var rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add('visible');
    }
  });
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
