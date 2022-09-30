// Contructor Function (exercício)

// Criar um objeto postagem(usando um função de construtor)
// título,mensagem,autor,vizualizacoes,comentarios,estaaovivo

let comentarioss = [{autor: 'a', mensagem: 'b'}, {autor: 'a',mensagem:'b'}];

function Postagem(titulo,mensa,auto,vizualiza,comentarios,estaraovivo){
    
    this.titulo = titulo;
    this.mensagem = mensa;
    this.autor = auto;
    this.vizualizacao = vizualiza;
    this.comentarios = comentarios;
    this.estaraovivo = estaraovivo;
    
    //let lista = [this.titulo,this.mensagem,this.autor,this.vizualizacao,this.comentarios,this.estaraovivo]
    //for(let indice in lista)
        //console.log(lista[indice]);
    
    

}

let post = new Postagem('a','b','c',10,comentarioss,false);
console.log(post);

// CORREÇÃO OFICIAL

function Postagem1(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem2 = new Postagem1('a','b','c');
console.log(postagem2);

