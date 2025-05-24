document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const coolEffect = document.querySelector('.cool-effect')

    if (!header || !coolEffect) {
        console.error("Header or cool-effect element not found");
        return;
    }

    header.addEventListener('mouseenter', () => {
        coolEffect.style.opacity = '1';
        coolEffect.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    header.addEventListener('mousemove', (event) => {

        const rect = header.getBoundingClientRect();
        const mouseX_header = event.clientX - rect.left;
        const mouseY_header = event.clientY - rect.top;

        coolEffect.style.left = `${mouseX_header}px`;
        coolEffect.style.top = `${mouseY_header}px`;
    });

    header.addEventListener('mouseleave', () => {
        coolEffect.style.opacity = '0';
        coolEffect.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });
});