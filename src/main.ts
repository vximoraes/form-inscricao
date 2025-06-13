import '../public/assets/css/style.css'
import { toggleDarkMode } from './utils/theme'
import { validateFields } from './utils/validateFields'    

toggleDarkMode()

const nome = document.querySelector<HTMLInputElement>('#nome')!
const email = document.querySelector<HTMLInputElement>('#email')!
const sexoMasculino = document.querySelector<HTMLInputElement>('#sexo-masculino')!
const sexoFeminino = document.querySelector<HTMLInputElement>('#sexo-feminino')!
const curso = document.querySelector<HTMLSelectElement>('#cursos')!
const descricao = document.querySelector<HTMLTextAreaElement>('#descricao-pessoal')!
const termos = document.querySelector<HTMLInputElement>('#termos')!
const enviar = document.querySelector<HTMLInputElement>('#enviar')!

function cleanForm() {
    nome.value = ''
    email.value = ''
    sexoMasculino.value = ''
    sexoFeminino.value = ''
    curso.value = ''
    descricao.value = ''
    termos.value = ''
}

enviar.addEventListener('click', (event) => {
    event.preventDefault()

    const sexo = ''

    await validateFields(nome.value, email.value, sexo, curso.value, termos.value )
})