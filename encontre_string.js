// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const pessoa = {
    nome:'Gustavo',
    idade: 25,
    sobrenome:'Ariel',
    sexo:'Masculino',
    telefone: 24234531

};

exibirPropriedades(pessoa)

function exibirPropriedades(obj){
    
    for(let chave in obj){
        let compara = obj[chave];
        if(typeof(compara) === 'string'){
            console.log(chave,compara);
        }

    }
}

//Correção oficial

const filme ={
    titulo: 'Vingadores',
    ano:2018,
    diretor: 'Robin',
    personagem: 'Thor'
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj)
       if(typeof obj[prop] === 'string')
           console.log(prop,obj[prop])
}