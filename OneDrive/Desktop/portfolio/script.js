// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Dark mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll-triggered animations
const faders = document.querySelectorAll(".fade-in");

const appear = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

faders.forEach(fader => appear.observe(fader));

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
