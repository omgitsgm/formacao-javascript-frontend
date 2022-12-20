const botao = document.querySelector('#calcular');
const resultado = document.querySelector('.resultado');

botao.addEventListener("click", function(){
    resultado.innerHTML = "Fui clicado";
})