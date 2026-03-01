// SCROLL VISUAL AID FUNCTION, (downwards arrow icon behaviour)
const footer = document.querySelector("footer");
let iconVisible = true; // flag as to wether it *should* be visible
let inactivityTimer = null;


// binded to scroll event, hides icon based on timer
function handleScroll() {
  iconVisible = false;
  handleIconAnimation();

  // reset timer
  if (inactivityTimer) clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    iconVisible = true;
    handleIconAnimation();
  }, 5000); // 60,000ms == 1 min
}

// checks iconVisible flag, then applies anim classes to footer accordingly
function handleIconAnimation() {
  if (!footer) return;

  if (iconVisible) {
    footer.classList.remove("fade-out");
    footer.classList.add("fade-in");
  } else {
    footer.classList.remove("fade-in");
    footer.classList.add("fade-out");
  }
}


// MAIN EXECUTION
if (footer) {
  footer.classList.add("fade-in");
}

// call handleScroll everytime theres a scroll event
document.addEventListener("scroll", handleScroll, { passive: true });

