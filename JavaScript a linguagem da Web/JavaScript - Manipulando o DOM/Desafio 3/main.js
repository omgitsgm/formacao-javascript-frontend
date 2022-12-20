const botoes = document.querySelectorAll("button");

botoes.forEach((botao) =>{
    botao.addEventListener("click", (evento) => {
        visibilidade(evento.target.dataset.visibility);
    })
})

function visibilidade(estado){
    const itens = document.querySelectorAll(".item");
    itens.forEach((item) =>{
        item.style.visibility = estado;
    })
}