/**
 * Formata o input dos formularios para melhorar a legibilidade. Exempo: "1000000000" passa a ser "1 000 000 000" 
 * @param {string|number} v - numero a ser formatado 
 */
function formatInput(v) {

    //todo so aceitar uma virgula

    //so aceita numeros não remover virgula
    var n = v.replace(/[^0-9,.€]/g, '');

    //remover formatação para não tripar :) segundo replace troca , por pontos.  e ajuda e remover as virgulas que estão a mais :P
    var s = n.replace(/\s/g, '').replace(/,/g, '.');
    //var s = v.replace(/\s/g, '').replace(/€/g, '');

    //separa o inteiro do decimal
    var inteiros = s.split('.') //tudo acima de inteiros[2] e descartado como exessode virgulas

    var array1 = inteiros[0].split('');

    for (let index = array1.length - 3; index >= 0; index -= 3) {
        //adiciona espaço de 3 em 3
        array1.splice(index, 0, " ")
    }

    //adiciona a virgula se tem decimais
    if (inteiros[1] != undefined)
        array1.push(",")

    //adiciona os decimais a direita
    var resultado = array1.concat(inteiros[1])

    console.log(resultado.join(""));

    //return resultado.join("") + "€";
    return resultado.join("");

}

/**
 * Remove a formatação da string e convert em float
 * @param {string} n - string 
 */
function rawInputValue(n) {
    return parseFloat(n.replace(/\s/g, '').replace(/,/g, '.'));
}