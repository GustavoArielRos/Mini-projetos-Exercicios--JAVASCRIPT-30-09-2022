// Criar função para mostrar os números primos

// Primos
// Compostos

//Ex: 10,11

// 10 -> 1,2,5,10 -> não é primo
// 11 -> 1,11 -> é primo

function exibirNumerosPrimos(limite){

    lista_numeros = inicia(limite);
    for(let numero of lista_numeros){
        if((numero%)
    }

    
}

function inicia(tamanho){
    let lista =[];
    let contar = 1;
    while(contar <= tamanho){
        lista.push(contar);
        contar = contar + 1;
    }
    return lista;

}

// Correção oficial

function exibirNumerosPrimos1(limite){
    for(let numero = 2; numero <= limite; numero++){
        if(NumeroPrimo(numero)) console.log(numero);
    }
}

function NumeroPrimo(numero){
    let ehPrimo = true;

    for(let divisor = 2; divisor < numero ; divisor++){
        if(numero % divisor === 0){
            return false;
            
        }
    }
    return true;
}