// Efeito visual suave ao passar o mouse
document.querySelectorAll('.btn').forEach(button => {
    if (!button.classList.contains('disabled')) {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    }
});
