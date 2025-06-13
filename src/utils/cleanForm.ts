export function cleanForm(fields: {
    nome: HTMLInputElement,
    email: HTMLInputElement,
    sexoMasculino: HTMLInputElement,
    sexoFeminino: HTMLInputElement,
    curso: HTMLSelectElement,
    descricao: HTMLTextAreaElement,
    termos: HTMLInputElement
}) {
    fields.nome.value = '';
    fields.email.value = '';
    fields.sexoMasculino.checked = false;
    fields.sexoFeminino.checked = false;
    fields.curso.selectedIndex = 0;
    fields.descricao.value = '';
    fields.termos.checked = false;
    document.querySelectorAll('.erro-validacao').forEach(e => e.remove());
}