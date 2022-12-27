function ehPalindromo() {
    var palavra = "rever";
    var letrasPalavra = palavra.split("");
    // console.log(letrasPalavra);
    var letrasPalavraInvertida = letrasPalavra.reverse();
    // console.log(letrasPalavraInvertida);
    var palavraInvertida = letrasPalavraInvertida.join("");

    console.log(palavra);
    console.log(palavraInvertida);

    palavra == palavraInvertida ? console.log('É um palíndromo') : console.log('Não é um palíndromo');
}

ehPalindromo();