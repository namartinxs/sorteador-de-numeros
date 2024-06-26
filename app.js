function mensagem (tag,texto){
    let msg = document.getElementById(tag);
    msg.innerHTML = texto;

}

function sortear(){
    let qtd = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero; 

    if (de >= ate){
        alert(' O número do campo "do número" deve ser menor e, diferente do que o escolhido para o campo "até o número".');
        return;

    }else if (qtd > (ate - de) + 1){
        alert('O campo "quantidade" deve ser menor ou igual ao intervalo de números escolhidos para o sorteio');
        return;
    }
    for (let i = 0; i < qtd; i++){
        numero = gerarAleatorio(de,ate);
        
        while (sorteados.includes(numero)){
            numero = gerarAleatorio(de,ate);
        }
        sorteados.push(numero);
    }
    
    let singPlu = sorteados.length == 1 ? 'Número sorteado:' : 'Números sorteados:'; 
    mensagem('resultado', `<label class="texto__paragrafo"> ${singPlu} ${sorteados}</label>` ); 
    alterarStatusbtn()
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value ='';
    document.getElementById('ate').value ='';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusbtn()
    
}

function gerarAleatorio(inicial,final){
    return Math.floor(Math.random() *(final - inicial + 1)) + inicial;
}

function alterarStatusbtn() {
    
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){

        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }

}