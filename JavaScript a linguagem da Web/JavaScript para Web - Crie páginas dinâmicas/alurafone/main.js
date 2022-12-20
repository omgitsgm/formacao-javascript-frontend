const listaDeTeclas = document.querySelectorAll('input[type=button]');

let numero = '';
for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const valor = tecla.getAttribute("value");

  tecla.onclick = function () {
    numero = `${numero}${valor}`;
    document.querySelector('input[type=tel]').setAttribute('value', numero);
  }

  tecla.onkeydown = function(evento){
    if(evento.code == "Enter" || evento.code == "Space"){
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
  }
}
