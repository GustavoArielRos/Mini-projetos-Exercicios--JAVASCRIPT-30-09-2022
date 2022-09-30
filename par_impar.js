// Receber uma quantidade de valores para avaliar
// função exibe se cada valor é par ou ímpar

exibirTipo(17);

function exibirTipo(limite){
    let lista = [];
    let contar = 0;
    while(contar <= limite){
        lista.push(contar);
        contar = contar + 1;
    }
    for(let indice in lista){
        if(indice%2 == 0){
            console.log(lista[indice],'par');
        }
        else{
            console.log(lista[indice],'impar');
        }
    }
}

// Correção oficial:

exibirTipo1(5);
function exibirTipo(limite){
    for(let i = 0 ; i <= limite ; i++){
        if(i % 2 === 0)
           console.log(i,'PAR');
        else
           console.log(i,'ÍMPAR');
    }
}