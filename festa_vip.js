

// Correção oficial

function VerificarEntrada(){

    // Colocando na variavel "NomeConvidado" o valor que foi inserido no input do id 'nome'
    NomeConvidado = document.getElementById('nome').value;

    // Criando o array dos nomes dos convidados
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael','Jonas','Carol','Jhonatan']
    if(ConvidadosCristian.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Voce pode Entrar!'
    }
    else{
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar'
    }
}

