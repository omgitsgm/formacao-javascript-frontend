function aplicarDesconto(livros) {
    const desconto = 0.3; // 30%
    livrosComDesconto = livros.map(livro => {
        // '...livro' faz uma cópia de todo o objeto livro, só que o preço eu vou modificar pra aplicar o desconto.
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    });
    return livrosComDesconto;
}