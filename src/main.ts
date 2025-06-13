import '../public/assets/css/style.css'
import { criarUsuario } from './api/usuarioApi'
import { toggleDarkMode } from './utils/theme'
import { validateFields } from './utils/validateFields'    
import type { Usuario } from './models/Usuario'
import { v4 as uuid } from 'uuid'
import { cleanForm } from './utils/cleanForm'
import { showValidationError } from './utils/showValidationError'

const nome = document.querySelector<HTMLInputElement>('#nome')!
const email = document.querySelector<HTMLInputElement>('#email')!
const sexoMasculino = document.querySelector<HTMLInputElement>('#sexo-masculino')!
const sexoFeminino = document.querySelector<HTMLInputElement>('#sexo-feminino')!
const curso = document.querySelector<HTMLSelectElement>('#cursos')!
const descricao = document.querySelector<HTMLTextAreaElement>('#descricao-pessoal')!
const termos = document.querySelector<HTMLInputElement>('#termos')!
const enviar = document.querySelector<HTMLInputElement>('#enviar')!

toggleDarkMode()

enviar.addEventListener('click', async (event) => {
    event.preventDefault()

    document.querySelectorAll('.erro-validacao').forEach(e => e.remove());

    let sexo = ''
    if (sexoMasculino.checked) {
        sexo = 'masculino'
    } else if (sexoFeminino.checked) {
        sexo = 'feminino'
    }

    const cursoSelecionado = curso.options[curso.selectedIndex].text;

    const usuario: Usuario = {
        id: uuid(),
        nome: nome.value,
        email: email.value,
        sexo: sexo,
        curso: cursoSelecionado,
        descricao: descricao.value,
        termo: termos.checked
    }

    try {
        await validateFields(usuario)
        await criarUsuario(usuario)
        cleanForm({ nome, email, sexoMasculino, sexoFeminino, curso, descricao, termos })
    } catch (err: any) {
        if (err.errors) {
            err.errors.forEach((erro: any) => {
                let inputRef: HTMLElement | null = null;
                switch (erro.path[0]) {
                    case 'nome': inputRef = nome; break;
                    case 'email': inputRef = email; break;
                    case 'sexo': inputRef = sexoMasculino.parentElement; break;
                    case 'curso': inputRef = curso; break;
                    case 'termo': inputRef = termos; break;
                }
                showValidationError(inputRef, erro.message);
            });
        }
    }
})