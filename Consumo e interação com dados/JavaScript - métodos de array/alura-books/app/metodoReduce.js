function calcularValorTotalDeLivrosDisponiveis(livros){
    // Efetua a soma dos preços do livros a partir do índice 0 do array
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}