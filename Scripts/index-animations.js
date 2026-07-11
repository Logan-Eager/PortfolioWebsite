// ANIMATIONS FOR INDEX.HTML

// Initialize animations on start
window.addEventListener("DOMContentLoaded", function () {
  initNavBarAnimation();
  initContactAnimation();
});


// Navigation Header animation
function initNavBarAnimation(){
  const logo = document.querySelector("nav h1");
  if (!logo) return;

  setTimeout(() => logo.classList.add("drop-in"), 80);
}

// Contact Icon animation
function initContactAnimation(){
  const contactSection = document.querySelector("#contact");
  if (!contactSection) return;

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
      );
    },
    { threshold: 0.5 },
  );

  io.observe(contactSection);
}
