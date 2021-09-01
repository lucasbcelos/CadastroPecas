//Criação e Exibição da Lista de Peças

const listaDePecas = ["Ar condicionado", "Motor", "Amortecedor"]

console.log(listaDePecas)

//Criação da condição para exibir a possibilidade ou não de cadastrar mais peças / No máximo cadastrar 10 peças

if (listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não há mais espaço na lista")
}

// Avaliação do peso da Peça, A peça precisa ter mais de 100 gramas

var peso = 300;

if (peso > 100) {
    console.log("Peso da Peça está Adequado")
} else {
    console.log("Peso insuficiente")
}

//Adicionando nova Peça, e avaliar se o nome está válido, precisando ter mais de 3 caracteres, ou emitindo uma mensagem de nome vazio ou então nome invalido

let nomePeca = "Pastilha";

console.log (nomePeca);

if (nomePeca.length > 3) {
    console.log("Nome Adequado!!")
} else if (nomePeca.length == 0) {
    console.log("O nome não pode ser vazio")
} else {
    console.log("O nome deve possuir mais de 3 caracteres, nome inválido!")
}

// Outra opção para avaliar se o nome está valido. Por enquanto está desativado
// switch (nomePeca.length) {
//     case 0:
//         console.log("O nome não pode ser vazio")
//         break;

//     case 1:
//     case 2:
//     case 3:
//         console.log("O nome deve possuir mais de 3 caracteres")
//         break

//     default:
//         console.log("Nome adequado!!")
//         break;
// }


