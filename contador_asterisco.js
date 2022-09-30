// Criar uma função que exibe a quantidade de *
// que aquela linha possui

exibirAsteriscos(5);

function exibirAsteriscos(linhas){

    let contar = 0;
    let asterisco = '';
    while(contar < linhas){
        asterisco = asterisco + '*';
        console.log(asterisco);
        contar = contar + 1;
    }

}

// Correção oficial

function exibirAsteriscos1(linhas){

    for(let linha = 1; linha <= linhas; linha++){
        let padrao='';
        for(let i =0; i < linha ; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}
