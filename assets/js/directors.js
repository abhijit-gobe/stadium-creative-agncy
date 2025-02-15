const link = document.querySelectorAll('.link');
const linkHoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-video');

link.forEach((linkElement, index) => {
    linkElement.addEventListener('mousemove', (e) => {
        link.forEach((otherLink, otherIndex) => {
            if (otherIndex !== index) {
                otherLink.style.opacity = 0.3;
                otherLink.querySelector('h1').style.opacity = 0.3;
            }
        });

        linkElement.style.opacity = 1;
        linkElement.querySelector('h1').style.opacity = 1;

        const linkRect = linkElement.getBoundingClientRect();
        
        const hoverReveal = linkHoverReveal[index];
        const videoElement = linkImages[index];

        hoverReveal.style.opacity = 1;
        hoverReveal.style.transform = `translate(-50%, -50%) rotate(5deg)`;
        videoElement.style.transform = 'scale(1)';

        hoverReveal.style.position = 'fixed';
        hoverReveal.style.left = `${e.clientX}px`;
        hoverReveal.style.top = `${linkRect.top + linkRect.height / 2}px`;
    });

    linkElement.addEventListener('mouseleave', () => {
        link.forEach(otherLink => {
            otherLink.style.opacity = 1;
            otherLink.querySelector('h1').style.opacity = 1;
        });

        const hoverReveal = linkHoverReveal[index];
        const videoElement = linkImages[index];

        hoverReveal.style.opacity = 0;
        hoverReveal.style.transform = `translate(-50%, -50%) rotate(-5deg)`;
        videoElement.style.transform = 'scale(0.8)';
    });
});