document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const coolEffect = document.querySelector('.cool-effect');

    if (!header || !coolEffect) {
        console.error("Header or cool-effect element not found!");
        return;
    }

    header.addEventListener('mouseenter', () => {
        coolEffect.style.opacity = '1';
        coolEffect.style.transform = 'translate(-50%, -50%) scale(1)'; // Scale to full size
    });

    header.addEventListener('mousemove', (event) => {
        // Get mouse position relative to the viewport
        // const mouseX_viewport = event.clientX;
        // const mouseY_viewport = event.pageY; // pageY includes scroll, clientY is viewport only

        // To position .cool-effect (which is absolute to header),
        // we need mouse coordinates relative to the header.
        const rect = header.getBoundingClientRect();
        const mouseX_header = event.clientX - rect.left;
        const mouseY_header = event.clientY - rect.top;

        // Update the circle's position.
        // The transform: translate(-50%, -50%) in CSS handles the centering.
        coolEffect.style.left = `${mouseX_header}px`;
        coolEffect.style.top = `${mouseY_header}px`;
    });

    header.addEventListener('mouseleave', () => {
        coolEffect.style.opacity = '0';
        coolEffect.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Scale down on exit
    });
});