document.addEventListener('DOMContentLoaded', () => {

    // ======== NAVIGATION SCROLL SPY ========
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // The 150 offset is a small buffer
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ======== SCROLL TO TOP BUTTON ========
    const scrollTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            // Show button
            scrollTopBtn.style.display = 'flex';
        } else {
            // Hide button
            scrollTopBtn.style.display = 'none';
        }
    });

    // ======== FADE-IN SECTIONS ON SCROLL ========
    const faderSections = document.querySelectorAll('.section');

    const appearOptions = {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: "0px 0px -50px 0px" // Start loading a bit before it's fully in view
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                appearOnScroll.unobserve(entry.target); // Stop observing after it has appeared
            }
        });
    },
    appearOptions);

    faderSections.forEach(section => {
        appearOnScroll.observe(section);
    });

});