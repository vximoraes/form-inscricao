import inscritos from '../data/dados.json';
import { initTheme, toggleDarkMode } from './utils/theme';

function renderInscritos() {
    const tbody = document.getElementById('tabela-inscritos');
    if (!tbody) return;
    tbody.innerHTML = '';
    (inscritos.inscritos || []).forEach((inscrito: any) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${inscrito.nome || ''}</td>
            <td>${inscrito.email || ''}</td>
            <td>${inscrito.sexo || ''}</td>
            <td>${inscrito.curso}</td>
            <td>${inscrito.descricao || ''}</td>
        `;
        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderInscritos();
    initTheme();
    const iconeLua = document.querySelector('.icone-lua');
    if (iconeLua) {
        iconeLua.addEventListener('click', toggleDarkMode);
    }
});