function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom();
// O código acima geraria um erro dizendo que o usuário precisa interagir com a página primeiro, pois ao colocar os parênteses o JS interpreta que deve executar a função imediatamente, ou seja, ocorreria no carregamento da página.
// O nosso objeto, entretanto, é atributo ao atributo onclick do botão, o retorno da função 'tocaSomPom', por isso devemos remover os parênteses.
// document.querySelector('.tecla_pom').onclick = tocaSomPom;

// Seleciona todos os elementos associados a classe 'tecla'. Gera uma lista de elementos.
// document.querySelectorAll('.tecla');

// Atribui a lista de teclas a uma constante
const listaDeTeclas = document.querySelectorAll('.tecla');

/*
// let representa variáveis que mudam sempre de valor
let contador = 0;

while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    // template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    contador = contador + 1;

    console.log(contador);
}
*/
for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    
    document.querySelector().setAttribute('value', telefone);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}
