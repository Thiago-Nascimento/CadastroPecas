let peso = 99.5;

if (peso > 99) {
    console.log("A peça possui um peso adequado, pode ser cadastrada!")
} else {
    console.log("A peça não pode ser cadastrada, não possui o peso mínimo")
}

let listaPecas = ["Disco de Freio", "Amortecedor", "Virabrequim", "Vela", "Bateria", "Radiador", "Correia", "Carter", "Ignição", "Embreagem"];

// [1,2,3,4,5,6,7,8,9,10]
// [0,1,2,3,4,5,6,7,8,9] - Zero Based

let numeroPecas = listaPecas.length;

if (numeroPecas < 10) {
    console.log("A lista ainda possui espaço para mais peças.")
} else {
    console.log("Não há espaço disponível na lista, a capacidade máxima foi atingida")
}

let texto = "35"     // String
let numero = 35         // Number

// 35 + 35 -> 70
// "35" + "35" -> "3535"

let nomePeca = listaPecas[0];

if(nomePeca.length > 3) {
    console.log("Nome da peça é válido, pode seguir com o cadastro");
} else {
    console.log("Nome de peça inválido, o nome deve ter mais de 3 caracteres")
}