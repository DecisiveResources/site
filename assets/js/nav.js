// Mobile menu toggle for _includes/nav.html. Loaded right after the nav markup, so the elements exist.
(function () {
  const menu = document.getElementById('mobile-menu');
  const navbarToggle = document.getElementById('navbar-toggle');
  const closeButton = document.getElementById('close-menu');
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');

  function toggleMenu() {
    const isOpen = menu.classList.toggle('active');
    navbarToggle.setAttribute('aria-expanded', isOpen);
    openIcon.classList.toggle('d-none', isOpen);
    closeIcon.classList.toggle('d-none', !isOpen);
  }

  navbarToggle.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', toggleMenu);

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    if (menu.classList.contains('active') && !menu.contains(event.target) && !navbarToggle.contains(event.target)) {
      toggleMenu();
    }
  });
})();
