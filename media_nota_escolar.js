// Exercício Nota Escolar
// Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const media = [75,75,75];

mediaAluno(media);

function mediaAluno(notas){
    
    const f1 = 0;
    const f2 = 59;
    const d1 = 60;
    const d2 = 69;
    const c1 = 70;
    const c2 = 79;
    const b1 = 80;
    const b2 = 89;
    const a1 = 90;
    const a2 = 100;
    
    let soma_notas = 0;
    let soma_notas_f = 0;
    for(let indice = 0; indice < 3; indice++){
        soma_notas = soma_notas + notas[indice];
    }

    Math.floor(soma_notas_f) = soma_notas/3;

    if(soma_notas_f <= f2){
        console.log('F');
    }
    else if(soma_notas_f >=d1 && soma_notas <=d2 ){
        console.log('D');
    }
    else if(soma_notas_f >=c1 && soma_notas <=c2 ){
        console.log('C');
    }
    else if(soma_notas_f >=b1 && soma_notas <=b2 ){
        console.log('B');
    }
    else if(soma_notas_f >=a1 && soma_notas <=a2 ){
        console.log('A');
    }
}

// CORREÇÃO OFICIAL:

function mediaDoAluno(notas){
    const media = calcularMedia(notas);
    
    if(media < 59 ) return 'F';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
    return 'A';
}

function calcularMedia(array){
    let soma = 0;
    for(let valor of array){
        soma += valor;
    }
    return soma/(array.length); // array.length -> tamanho do array
}