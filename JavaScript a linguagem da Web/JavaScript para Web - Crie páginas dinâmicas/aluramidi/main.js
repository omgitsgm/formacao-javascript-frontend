function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom();
// O código acima geraria um erro dizendo que o usuário precisa interagir com a página primeiro, pois ao colocar os parênteses o JS interpreta que deve executar a função imediatamente, ou seja, ocorreria no carregamento da página.
// O nosso objeto, entretanto, é atributo ao atributo onclick do botão, o retorno da função 'tocaSomPom', por isso devemos remover os parênteses.
// document.querySelector('.tecla_pom').onclick = tocaSomPom;

// Seleciona todos os elementos associados a classe 'tecla'. Gera uma lista de elementos.
// document.querySelectorAll('.tecla');

// Atribui a lista de teclas a uma constante
const listaDeTeclas = document.querySelectorAll('.tecla');
