document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.getElementById('navbar-toggler');
  const navbarNav = document.getElementById('navbar-nav');

  navbarToggler.addEventListener('click', function() {
    navbarToggler.classList.toggle('active');
    navbarNav.classList.toggle('active');
  });
});