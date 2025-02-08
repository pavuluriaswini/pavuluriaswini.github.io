document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    // Toggle mobile menu
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Smooth scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll effect for header
    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 50);
    });
});