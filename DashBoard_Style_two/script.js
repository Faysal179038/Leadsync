// Sidebar
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
        const submenu = button.nextElementSibling;
        submenu.classList.toggle('show'); 
        button.classList.toggle('rotate'); 
    });
});

