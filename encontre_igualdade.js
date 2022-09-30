// Exercício 43 - Igualdade de Objetos (Exercício)

function Endereco(rua, cidade , cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
};

const endereco1 = new Endereco('a','b', 'c');
const endereco2 = new Endereco('a','b','c');

function saoIguais(endereco1, endereco2){
    // comparar se as propriedades são iguais

    for(let chave in endereco1){
        let rua1 = endereco1[chave];
        let cidade1 = endereco1[chave];
        let cep1 = endereco1[chave];
    };

    for(let chave in endereco2){
        let rua2 = endereco2[chave];
        let cidade2 = endereco2[chave];
        let cep2 = endereco2[chave];
    };
    
    if((rua1 === rua2)&&(cidade1 == cidade2)&&(cep1 == cep2))
        console.log('Os endereços são iguais');
    

    else
        console.log('Os endereços são diferentes');
    

}

function temEnderecoMemoriaIguais(endereco1,endereco2){
    // comparando se a referênciado objeto aponta para o mesmo local na memória

}

// CORREÇÃO OFICIAL:


function Endereco(rua, cidade , cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
};

const endereco1 = new Endereco('a','b', 'c');
const endereco2 = new Endereco('a','b','c');
const endereco3 = endereco1;

// Essa função vai retornar TRUE se eles forem iguais e
// e vai retornar FALSE se não forem iguais
function saoIguais(endereco1, endereco2){
    // comparar se as propriedades são iguais
    return endereco1.rua === endereco2.rua &&
             endereco1.cidade === endereco2.cidade &&
             endereco1.cep === endereco2.cep
}

console.log(saoIguais(endereco1,endereco2));

// Vai retornar True se tem o mesmo espaço de memória e False
// se não tiver
function temEnderecoMemoriaIguais(endereco1,endereco2){
    // comparando se a referênciado objeto aponta para o mesmo local na memória
    return endereco1 === endereco2;

    // se fosse isso
    return endereco1 === endereco3;// iria dar True pq noiz armazenamos no mesmo espaço
}