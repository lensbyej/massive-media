const launchDate = new Date("March 14, 2026 10:00:00").getTime();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownContainer = document.querySelector(".countdown");

if (daysEl && hoursEl && minutesEl && secondsEl) {
  const timer = setInterval(function () {

    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    if (distance < 0) {

      clearInterval(timer);
      if (countdownContainer) {
        countdownContainer.innerHTML = "Website Live";
      }

    }

  }, 1000);
}

const navOverlay = document.querySelector(".nav-overlay");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");

const setNavState = (open) => {
  if (!navOverlay) return;
  navOverlay.setAttribute("data-state", open ? "open" : "closed");
  if (menuToggle) {
    menuToggle.classList.toggle("open", open);
  }
};

if (menuToggle) {
  menuToggle.addEventListener("click", () => setNavState(true));
}

if (menuClose) {
  menuClose.addEventListener("click", () => setNavState(false));
}

if (navOverlay) {
  navOverlay.addEventListener("click", (event) => {
    if (event.target === navOverlay) {
      setNavState(false);
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavState(false);
  }
});
