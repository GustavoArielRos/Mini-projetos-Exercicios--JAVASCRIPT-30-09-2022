// Velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// Math.Floor()
// caso pontos maior que 12 -> "Carteira Suspendida"

function verificarVelocidade(velocidade){
    
    if(velocidade <= 70){
        console.log('Velocidade:',velocidade);
    }
    else if(velocidade > 70){
        max = velocidade - 70;
        pontos = max / 5;
        if( pontos > 12){
            console.log("Carteira Suspendida");
        }
        else{
            console.log(Math.floor(pontos),'na carteira');
        }
    }
}

verificarVelocidade(55);

// Correção oficial do exercício:

verificarVelocidade2(55);

function verificarVelocidade2(velocidade2){
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    const carteirasusp = 12;
    if(velocidade2 <= velocidadeMaxima)
       console.log('Ok');
    else{
        const pontos = Math.floor(((velocidade2 - velocidadeMaxima)/KmPorPonto));
        if( pontos >= carteirasusp )
            console.log('Carteira Suspensa');

        else 
            console.log('Pontos', pontos);
    }
}