# 📝 Formulário de Inscrição FIC

Projeto acadêmico experimental que utiliza **Vite**, **TypeScript** e **json-server** para criar um formulário de inscrição em cursos FIC, com validação de dados e persistência via API REST mockada.

![Imagem 1](/public/assets/images/Screenshot_1.png)
![Imagem 2](/public/assets/images/Screenshot_2.png)

## Visão Geral

Este projeto permite que usuários se inscrevam em diversos cursos através de um formulário web moderno. Os dados são validados com **Zod** e enviados para uma API REST simulada pelo **json-server**. O frontend é construído com **Vite** e **TypeScript**, com layout responsivo e suporte a dark mode.

## Funcionalidades

- Formulário de inscrição com validação de campos obrigatórios
- Validação dos dados utilizando **Zod**
- Persistência dos dados via **json-server** (mock API REST)
- Feedback visual de erros de validação em tempo real
- Limpeza automática do formulário após envio
- Dark mode
- Estrutura modular: validação, API, UI helpers, limpeza de formulário

## Tecnologias

- **Vite**: bundler moderno e servidor de desenvolvimento
- **TypeScript**: tipagem estática e recursos avançados de JS
- **json-server**: mock de API REST a partir de um arquivo JSON
- **Zod**: validação de dados
- **CSS**: estilos modulares

## Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- **json-server**: instale localmente com `npm install json-server`

## Instalação e Execução

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/vximoraes/form-inscricao.git
   cd form-inscricao
   ```

2. **Instalar dependências**

   ```bash
   npm install
   # ou yarn install
   ```

3. **Iniciar o json-server**

   Sirva o `dados.json` na porta 3000:

   ```bash
   npm run server
   ```

4. **Executar o servidor de desenvolvimento do Vite**

   Em outro terminal:

   ```bash
   npm run dev
   # ou yarn dev
   ```

5. **Acessar o formulário**

   Abra no navegador: [http://localhost:5173](http://localhost:5173)
