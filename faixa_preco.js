// Javascript  exercicio - faixa de preço (exercício)

// Crie um array de objetos de faixa de preço para que ela
// possa ser usada em um site igual o mercado livre
// faixas -> tooltip , mínimo , máximo

let faixas = [
    {tooltipo : true },
    {minimo : 100.00},
    {maximo : 250.00}

];

console.log(faixas);

// CORREÇÃO OFICIAL:

// 1- opção
let faixas1 = [
    {tooltip: 'até R$700', minimo: 0, maximo:700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo:99999999}

];

console.log(faixas);

// 2- opção (Factory Function)
function criaFaixaPreco(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1000,10000),
]

console.log(faixas2);

// 3- opção (Constructor Function)

function FaixaPreco(tooltip, minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
};

let faixas3 = [
    new FaixaPreco('d',10,20),
    new FaixaPreco('e',20,30),
    new FaixaPreco('f',30,40)
];

console.log(faixas3);