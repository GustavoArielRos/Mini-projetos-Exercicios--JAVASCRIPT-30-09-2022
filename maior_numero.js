// Escreva uma função que usa 2 números e retorna o maior entre eles

function maior(a,b){
    if(a > b){
        console.log('O número ',a,'é maior que o número',b);
    }

    else if(a < b){
        console.log('O número ',b,'é maior que o número',a);
    }

    else{
        console.log('Os 2 números possuem o mesmo valor');
    }
}

let a = 20;
let b = 40/2;

maior(a,b);

// correção oficial do exercicio

let valorMaior = max(10,10);
console.log(valorMaior);

function max(numero1,numero2){
    return numero1>numero2 ? numero1: numero2;
}

