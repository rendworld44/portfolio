// ========================================
// HOME PAGE ANIMATION
// ========================================

window.addEventListener("DOMContentLoaded", () => {

    const intro = document.querySelector(".intro");
    const name = document.querySelector(".home h1");
    const jobTitle = document.querySelector(".home h2");
    const description = document.querySelector(".home-description");
    const buttons = document.querySelector(".home-buttons");

    const elements = [
        intro,
        name,
        jobTitle,
        description,
        buttons
    ];

    elements.forEach((element, index) => {

        setTimeout(() => {
            element.classList.add("show");
        }, index * 180);

    });

});


// ========================================
// TYPING TEXT ANIMATION
// ========================================

const typingText = document.querySelector(".typing-text");

const roles = [
    "IT Support Specialist",
    "Front-End Developer",
    "Networking"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeRole() {

    const currentRole = roles[roleIndex];

    if (isDeleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

    }

    if (!isDeleting && characterIndex === currentRole.length) {

        isDeleting = true;
        setTimeout(typeRole, 1500);
        return;
    }

    if (isDeleting && characterIndex === 0) {

        isDeleting = false;
        roleIndex++;

        if (roleIndex === roles.length) {
            roleIndex = 0;
        }
    }

    const typingSpeed = isDeleting ? 45 : 90;

    setTimeout(typeRole, typingSpeed);
}

setTimeout(typeRole, 1000);




















