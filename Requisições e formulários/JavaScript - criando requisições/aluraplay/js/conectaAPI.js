// Retorna a lista de vídeos da API
async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos');
    // Convertemos os bytes da conexão em um JSON para conseguir visualizar as informações da API
    const conexaoConvertida = await conexao.json();
    // console.log(conexaoConvertida);
    
    return conexaoConvertida;
}

// Cria vídeo e insere no JSON
async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        // headers content-type especifica o tipo de conteúdo que estamos enviando na requisição.
        headers: {
            "Content-type": "application/json"
        },
        // body é o corpo da requisição. estamos enviando um objeto de valores em string
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if(!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo.")
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    // ?q=algumaCoisa -> uma query na api buscando pelo termo passado || Isso é possível graças ao json server e seus atributos de URL
    // Documentação do JSON Server: https://github.com/typicode/json-server
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}


// Exporta uma variável 'conectaApi', que vai receber o objeto retornado pela função 'listaVideos'
export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}