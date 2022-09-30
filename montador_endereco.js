// Javascript - Objeto Endereço

// Criar um objeto endereco que contem:

// Rua
// Cidade
// CEP
// exibirEndereco(endereco)




let endereco = {
    rua:'jj sebra',
    cidade: 'Rio de janeiro',
    CEP: '222666444',

};

function exibe(ende){
    for(let chave in ende){
        console.log(chave,":",ende[chave]);
    }
    
};

exibe(endereco);

// CORREÇÃO OFICIAL 

let endereco1 = {
    rua:'a',
    cidade:'b',
    cep: 'c'
};

function exibirEndereco(endereco){
    for(let chave in endereco)
        console.log(chave,endereco[chave]);
};

exibirEndereco(endereco1);
