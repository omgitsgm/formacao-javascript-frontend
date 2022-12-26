// A declaração async function define uma função assíncrona e o operador await é utilizado para esperar por uma Promise. Dessa maneira, nossa requisição funcionará corretamente.
async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();

        // Tratamento do erro em que o CEP inserido possui a quantidade de dígitos necessária, mas o valor em sí é inválido.
        if(consultaCEPConvertida.erro) {
            throw Error('CEP inválido.');
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch(erro) {
        mensagemErro.innerHTML = `<p class="mensagem-erro">CEP inválido. Tente novamente.</p>`;
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

// Resolve várias Promises ao mesmo tempo
// let ceps = ['01001000', '01001001'];
// // Cria um novo array com o que retornar da função buscaEndereco pra cada um dos valores do array de ceps.
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// console.log(conjuntoCeps);
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

// Função assíncrona sem utilizar async e await. Caímos num callback hell, que é quando temos MUITAS funções para executar. O código acima simplifica muito essa tarefa.
// var consultaCEP = fetch("https://viacep.com.br/ws/01001250/json/")
//   .then((resposta) => resposta.json())
//   .then((r) => {
//         if(r.erro) {
//             throw Error('Esse CEP não existe.');
//         } else{
//             console.log(r);
//         }
//     })
//   .catch(erro => console.log(erro))
//   .finally(() => console.log('Processamento concluído.'));

// console.log(consultaCEP);
  