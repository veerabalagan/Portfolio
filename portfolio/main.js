const readMoreBtn = document.getElementById('read-more-btn');
const moreAbout = document.getElementById('more-about');

readMoreBtn.addEventListener('click', () => {
    moreAbout.classList.toggle('hidden');

    // Toggle button text
    if (moreAbout.classList.contains('hidden')) {
        readMoreBtn.textContent = 'Read More';
    } else {
        readMoreBtn.textContent = 'Read Less';
    }
});
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle the menu icon and display navbar on click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            });
        }
    });

    // Sticky header toggle
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close the navbar when scrolling
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
// Initialize ScrollReveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// Correct selectors and grouping logic
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-container, .certificate-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
// pdf download
document.getElementById("download-resume").addEventListener("click", () => {
    const fileUrl = "resume.pdf"; // Path to the file
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Resume.pdf"; // Rename file if desired
    link.click();
});


