import { conectaApi } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    // Esvaziar a lista de vídeos antes de exibir os vídeos derivados da pesquisa.
    // Enquanto a lista tiver um primeiro filho...
    while(lista.firstChild) {
        // Remova o primeiro filho da lista.
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento)));

    if(busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo.</h2>`;
    }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");
botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));