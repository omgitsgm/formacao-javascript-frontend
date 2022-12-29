import { conectaApi } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    // Previno o evento padrão do evento de submit do formulário, que é recarregar a página automáticamente. Dessa forma não veríamos nada.
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    // Math.random * 10 -> número aleatório entre 0 e 9
    // Math.floor -> retorna o menor número inteiro de um valor dado. ex: 5.75 -> 5 
    const descricao = Math.floor(Math.random() * 10).toString();

    try{
        await conectaApi.criaVideo(titulo, descricao, url, imagem);
        
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento));