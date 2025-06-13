import type { Usuario } from "../models/Usuario";

export async function criarUsuario(usuario: Usuario) {
    const resposta = await fetch('http://localhost:3000/inscritos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });

    if (!resposta.ok) {
        return null;
    }

    const usuarioCriado = await resposta.json();
    if (!usuarioCriado || !usuarioCriado.id) {
        return null;
    }

    return usuarioCriado;
}