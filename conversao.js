//função que evita resultados en notação cientifica exemplo 5e-9 é 0.000000005
/**
 * 
 * @param {*} x 
 */
function toFixed(x) {
    if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10, e - 1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
        }
    } else {
        var e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10, e);
            x += (new Array(e + 1)).join('0');
        }
    }
    return x;
}
var distancias = ["km", "hm", "dam", "m", "dm", "cm", "mm"] // 10
var areas = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"] // 100
var volumes = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"] // 1000
var litros = ["kl", "hl", "dal", "l", "dl", "cl", "ml"] // 10
var massas = ["kg", "hg", "dag", "g", "dg", "cg", "mg"] // 10

/**
 * Represents a book.
 * @constructor
 * @param {number} val - Valor a ser converido.
 * @param {string} uni1 - Unidade de medida inicial.
 * @param {string} uni2 - Unidade de medida final.
 * @param {string} degrau - Valor a multiplicar por cada passo.
 * @param {Array} lista -Lista de unidades a ser utilizada.
 */
function convert(val, uni1, uni2, degrau, lista) {
    var passos = 0;
    var i_uni1 = lista.findIndex(ele => ele === uni1);
    var i_uni2 = lista.findIndex(ele => ele === uni2);
    //findIndex retoma -1 se não encontrar correspondencias na array
    if (i_uni1 === -1 || i_uni2 === -1) {
        console.log("error unidade não foi encontrada");
    } else {
        passos = Math.abs(i_uni1 - i_uni2);
        if (i_uni1 > i_uni2) // anda para a esquerda ou seja divide
        {
            console.log("Número de passos para esquerda " + passos);
            return toFixed(val / Math.pow(degrau, passos));
        } else { // anda para direta ou seja multiplica
            console.log("Número de passos para direita " + passos);
            return toFixed(val * Math.pow(degrau, passos));
        }
    }
}
// testes
// console.log(convert(5, "m", "dm", 10, distancias));
// console.log(convert(1, "km³", "mm³", 1000, volumes));