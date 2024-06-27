
function sortear(){

let quantidade = parseInt (document.getElementById("quantidade").value);
let de = parseInt (document.getElementById("de").value);
let ate = parseInt (document.getElementById("ate").value);
let listaSorteio = []
if (de>=ate || quantidade>ate || quantidade == 0){
    alert("Preencha os campos corretamente!")
    reiniciar()
}
else{

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        while (listaSorteio.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        
        listaSorteio.push(numero);}
}
let aparecerNaTela= listaSorteio.join(" , ")
let resultado = document.getElementById('resultado')

resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${aparecerNaTela}.</label>`
trocarStatusBotao();
}


function obterNumeroAleatorio(de , ate){
return Math.floor(Math.random()*(ate-de+1))+de;

}
function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum ate agora</label>`
    trocarStatusBotao()
}

function trocarStatusBotao()
{let botao= document.getElementById('btn-reiniciar');
    if (botao.classList.contains("container__botao-desabilitado"))
    {
        botao.classList.remove("container__botao-desabilitado")
        botao.classList.add("container__botao")
    }
    else{
        botao.classList.add("container__botao-desabilitado")
        botao.classList.remove("container__botao") 
    }

}



