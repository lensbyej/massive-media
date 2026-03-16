const navOverlay = document.querySelector('.nav-overlay');
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');

const setNavState = (open) => {
  if (!navOverlay) return;
  navOverlay.dataset.state = open ? 'open' : 'closed';
};

menuToggle?.addEventListener('click', () => setNavState(true));
menuClose?.addEventListener('click', () => setNavState(false));
navOverlay?.addEventListener('click', (event) => {
  if (event.target === navOverlay) {
    setNavState(false);
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setNavState(false);
  }
});
