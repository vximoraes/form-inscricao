import { z } from 'zod'

const UsuarioSchema = z.object({
    nome: z
        .string()
        .min(1, 'Campo nome é obrigatório.'),
    email: z
        .string()
        .email('Formato de email inválido.')
        .min(1, 'Campo email é obrigatório.'),
    sexo: z
        .string()
        .optional()
        .refine((val) => !val || val === "masculino" || val === "feminino", {
            message: "Sexo deve ser 'masculino' ou 'feminino'",
        }),
    curso: z
        .string()
        .min(1, 'Campo curso é obrigatório.')
        .refine((val) => val && val !== 'Nenhum', {
            message: 'Selecione um curso válido.'
        }),
    termo: z.literal(true, {
        errorMap: () => ({ message: "Os Termos de Uso e Política de Privacidade devem ser aceitos." })
    })
});

export { UsuarioSchema };