// Objeto Postagem de Blog

// Eu quero que você crie neste exercício um objeto de postagem
// de blog que vai conter as seguintes propriedades
// postagem
/*
título
mensagem
autor
vizualizações
comentários
    (autor, mensagem) --> array de objetos
estaAovivo
*/


let autor1 ={
    nome: 'Dom perciana',
    idade:27
};


let mensagem1 ={
    mensagem_autor: 'Bom dia'
};

let lista = [autor1,mensagem1];


let posta = {
    título: 'O levante',
    mensagem: 'Iae blz',
    autor:' Dom Casmurgo',
    vizualizações: 10,
    comentários: lista,
    estaAovivo: true

};


function postagem(postax){

    for(let chave in postax){
        console.log(chave,postax[chave]);
    };
}

postagem(posta);

// CORREÇÃO OFICIAL:

let postagem1 = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    comentarios: [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a',mensagem:'b'}
    ],
    estaAoVivo: true
}

console.log(postagem);

