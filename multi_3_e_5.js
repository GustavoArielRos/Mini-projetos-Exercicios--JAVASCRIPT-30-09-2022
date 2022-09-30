// Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

// no caso do número ser 10:
// -Multiplos de 3
// -3,6,9
// -Multiplos de 5
// -5,10
// -Somando os múltiplos: 3+6+9+5+10 = 33

somar(10);

function somar(limite){
    
    let soma = 0;
    let contar = 0;
    while(contar <= limite){
        if((contar%3 == 0) || (contar%5 == 0)){
            soma = soma + contar;
            contar = contar + 1;
        }
    }
    console.log(soma);
}

// CORREÇÃO OFICIAL

somar1(10);

function somar1(limite){
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for(i=0 ; i <= limite ; i++){
        if(i % 3 === 0)
         multiplosDe3 += i;
        if(i %  5 === 0)
         multiplosDe5 += i;

    }
    console.log(multiplosDe3 + multiplosDe5);
}

