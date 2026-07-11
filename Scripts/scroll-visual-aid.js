// SCROLL VISUAL AID BEHAVIOUR, (shows downwards arrow after set time)
document.addEventListener("DOMContentLoaded", initScrollVisualAid)

function initScrollVisualAid() {
  const footer = document.querySelector("footer");
  if (!footer) return;

  let iconVisible = true;
  let inactivityTimer = null;

  footer.classList.add("fade-in");

  document.addEventListener("scroll", handleScroll, { passive: true });

  function handleScroll() {
    if (iconVisible) {
      iconVisible = false;
      handleIconAnimation();
    }

    if (inactivityTimer) clearTimeout(inactivityTimer);

    inactivityTimer = setTimeout(() => {
      iconVisible = true;
      handleIconAnimation();
    }, 5000);
  }

  function handleIconAnimation() {
    if (iconVisible) {
      footer.classList.replace("fade-out", "fade-in")
    } else {
      footer.classList.replace("fade-in", "fade-out")
    }
  }
}
