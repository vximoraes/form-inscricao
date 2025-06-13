export function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const iconeLua = document.querySelector('.icone-lua');
    if (iconeLua) {
        if (document.body.classList.contains('dark-mode')) {
            iconeLua.setAttribute('src', './public/assets/images/sun-moon 1.png');
            iconeLua.setAttribute('alt', 'Alternar tema claro');
        } else {
            iconeLua.setAttribute('src', './public/assets/images/moon-star 1.png');
            iconeLua.setAttribute('alt', 'Alternar tema escuro');
        }
    }

    const botaoDarkMode = document.querySelector('.icone-lua');
    if (botaoDarkMode) {
        botaoDarkMode.addEventListener('click', toggleDarkMode);
    }
}