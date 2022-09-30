// troca o valor de uma variavel pela outra

let a = 'vermelho';
let b = 'azul';

console.log(a);
console.log(b);

function troca(a,b)
{
    let c = b;
    let d = a;

    console.log(c);
    console.log(d);
    
}

troca(a,b);

// A correção oficial do exercicio 

let c = a;

a = b;
b = c;

console.log(a);
console.log(b);