// Toggle dark mode
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Modo Oscuro';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add to styles.css
.dark-mode {
    background-color: #333;
    color: #f4f4f4;
}
