var numeroSecreto = parseInt(Math.random() * 10);
var tentativas = 3;
var botao = document.getElementById("chute");
var p = document.querySelector("p");
botao.addEventListener('click', verificaResposta);
var vidas = tentativas -1



function verificaResposta() {
    
    var chute = Number(document.querySelector("input").value);
        
        if (numeroSecreto == chute) {
            p.innerHTML = "Você acertou!!!";

        }else if(chute > numeroSecreto) {
            p.innerHTML = "O numero secreto é menor ";
            tentativas = tentativas -1;
;

        }else if(chute < numeroSecreto) {
            p.innerHTML = "O numero secreto é maior ";
            tentativas = tentativas -1;
;

        }
    if (tentativas == 0) {
        p.innerHTML = "Suas tentaivas acabaram. O numero secreto era " + numeroSecreto;

    }

    
        
    
}

