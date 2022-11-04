const listaDeTeclas = document.querySelectorAll('input[type=button]');

let numero = '';
for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const valor = tecla.getAttribute("value");

    tecla.onclick = function () {
        numero = `${numero}${valor}`;
        document.querySelector('input[type=tel]').setAttribute('value', numero);
    }
}

/*

Outra possível solução

const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (indice = 0; indice < listaDeTeclas.length; indice++) {

  const tecla = listaDeTeclas[indice];

  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }
}

*/