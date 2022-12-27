let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    // Ordena do menor preço para o maior preço -> 'a.preco - b.preco'
    // Se fosse para ordenar do maior preço para o menor preço, seria -> 'b.preco - a.preco'
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);

}