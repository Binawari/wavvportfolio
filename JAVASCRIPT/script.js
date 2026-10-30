document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function() {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });

    // Hide nav menu when any nav link is clicked (on mobile)
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });

    // Hide nav menu when scrolling (on mobile)
    window.addEventListener("scroll", function() {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      }
    });
  }
});