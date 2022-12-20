// Reproduz um som a partir do id de um áudio
function tocaSom (seletorAudio) {
    // Seleciona o áudio correspondente ao id e reproduz o som
    const elemento = document.querySelector(seletorAudio);

    // localName retorna a tag do elemento
    if(elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}

// Crio uma lista de teclas usando o querySelector para me informar todos os elementos da classe 'tecla'
const listaDeTeclas = document.querySelectorAll('.tecla');

// Percorremos todas as teclas da 'listaDeTeclas'
for(let contador = 0; contador < listaDeTeclas.length; contador++){

    // Selecionamos uma tecla
    const tecla = listaDeTeclas[contador];
    // Selecionamento o instrumeto dessa tecla
    const instrumento = tecla.classList[1];
    // Selecionamos um som a partir do instrumento selecionado. Nesse caso, utilizamos concatenação de string para gerar o idAudio único para cada instrumento.
    const idAudio = `#som_${instrumento}`;

    // Ao clicar na tecla, aciona uma função anônima que aciona a função tocaSom()
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // Quando uma tecla estiver sendo pressionada, aciona uma função anônima que adiciona a classe 'ativa' à tecla, modificando seu visual
    tecla.onkeydown = function (evento) {
        if(evento.code == "Enter" || evento.code == "Space"){
            tecla.classList.add("ativa");
        }
    }

    // Quando a tecla não estiversendo pressionada, aciona uma função anônima que remove a classe 'ativa', voltando seu visual ao normal
    tecla.onkeyup = function(){
        // Acessa a lista de classes do elemento e remove uma classe
        tecla.classList.remove('ativa');
    }

}
