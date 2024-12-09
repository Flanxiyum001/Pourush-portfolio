// Generate particles and animate them
const numberOfParticles = 50; // Number of particles to generate
const heroSection = document.getElementById('hero');

for (let i = 0; i < numberOfParticles; i++) {
    // Create a particle
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Set a random position
    particle.style.top = `${Math.random() * 100}vh`; // Random position on screen height
    particle.style.left = `${Math.random() * 100}vw`; // Random position on screen width
    
    // Set random animation duration for variation
    const randomDuration = Math.random() * 2 + 2; // Random duration between 2 and 4 seconds
    particle.style.animationDuration = `${randomDuration}s`;

    // Append particle to the hero section
    heroSection.appendChild(particle);
}
