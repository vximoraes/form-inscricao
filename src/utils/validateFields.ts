import type { Usuario } from '../models/Usuario'
import { v4 as uuid } from 'uuid'

export async function validateFields(nome: String, email: String, sexo: String, curso: String, termos: String) {
    const usuario: Usuario = {
        id: uuid(),
        nome: nome,
        email: email,
        sexo: sexo,
        curso: curso,
        termos: termos
    } 
}