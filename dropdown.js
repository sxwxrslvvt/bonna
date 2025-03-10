document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.custom-dropdown');
    if (!dropdown) {
        console.error('Элемент .custom-dropdown не найден');
        return;
    }

    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    const items = dropdown.querySelectorAll('.dropdown-item');
    const selectedOption = dropdown.querySelector('.selected-option');

    if (!toggle || !menu || !items || !selectedOption) {
        console.error('Не найдены необходимые элементы dropdown');
        return;
    }

    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('hidden');
        dropdown.classList.toggle('active');
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            const value = item.getAttribute('data-value');
            const text = item.textContent;
            selectedOption.textContent = text;
            menu.classList.add('hidden');
            dropdown.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            menu.classList.add('hidden');
            dropdown.classList.remove('active');
        }
    });
});