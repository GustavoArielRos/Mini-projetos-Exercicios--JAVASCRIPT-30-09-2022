// divisivel por 3 -> Fizz
// divisivel por 5 -> Buzz
// divisivel por 3 e 5 -> FizzBuzz
// nao divisivel por 3 ou 5 -> entrada
// nao é um numero -> 'Não é um numero'

//const resultado = fizzBuzz();
//console.log(resultado);

fizzBuzz(45);

function fizzBuzz(entrada){

    
        if(entrada % 3 == 0){
            console.log('Fizz');
            
        }
            

        else if(entrada % 5 == 0){
            console.log('Buzz');
           

        }
            

        else if(entrada % 5 == 0 && entrada % 3 == 0){
            console.log('FizzBuzz');
            
        }
            

        else if((entrada % 5 != 0 || entrada % 3 != 0) && (entrada == Number)){
            console.log(entrada);
          

        }
            

        else{
            console.log('Não é um número');
           
    
        }
            
}

// correção do exercicio oficial

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
       return 'Não é um número';
    if((entrada % 3 === 0) && (entrada % 5 === 0))
       return 'FizzBuzz';
    if(entrada % 3 === 0)
       return 'Fizz';
    if(entrada % 5 === 0)
       return 'Buzz';

    return entrada;
}