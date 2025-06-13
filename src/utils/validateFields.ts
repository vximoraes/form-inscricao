import type { Usuario } from '../models/Usuario'
import { UsuarioSchema } from './validators/schemas/zod/UsuarioSchema'

export async function validateFields(usuario: Usuario) {
    const parsedData = UsuarioSchema.parseAsync(usuario)

    return parsedData
}