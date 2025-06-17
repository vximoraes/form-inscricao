export function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    updateThemeIcon();
}

export function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

export function updateThemeIcon() {
    const iconeLua = document.querySelector('.icone-lua');
    if (!iconeLua) return;
    if (document.body.classList.contains('dark-mode')) {
        iconeLua.setAttribute('src', './public/assets/images/sun-moon 1.png');
        iconeLua.setAttribute('alt', 'Alternar tema claro');
    } else {
        iconeLua.setAttribute('src', './public/assets/images/moon-star 1.png');
        iconeLua.setAttribute('alt', 'Alternar tema escuro');
    }
}