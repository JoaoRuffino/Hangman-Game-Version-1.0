let palavraSecretaSorteada;
let listaDinamica = []
let tentativas = 8

const palavras = [
    "RECICLAGEM", "SUSTENTABILIDADE", "POLUIÇÃO", "DESMATAMENTO", "ECOSSISTEMA",
    "RENOVÁVEL", "BIODIVERSIDADE", "CONSCIENTIZAÇÃO", "COMPOSTAGEM", "AQUECIMENTO",
    "PRESERVAÇÃO", "ESTRATOSFERA", "EROSÃO", "REUTILIZAÇÃO", "DESPERDÍCIO",
    "REFLORESTAMENTO", "ENERGIA", "POLUENTE", "CONSERVAÇÃO", "CARBONO"
];

  

function criarPalavraSecreta(){
    const indexPalavra = Math.floor(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra]
    console.log(palavraSecretaSorteada)
}
criarPalavraSecreta()

function palavraNaTela(){
    const divPalavraSecreta = document.getElementById('palavra-secreta')
  
    divPalavraSecreta.innerHTML = ""

    for(let i = 0; i < palavraSecretaSorteada.length; i++){

        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            divPalavraSecreta.innerHTML = divPalavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            divPalavraSecreta.innerHTML = divPalavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }


    }
   



}
palavraNaTela()

function verificaLetra(letra){
    document.getElementById('tecla-' + letra).disabled = true
    
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra)
        palavraNaTela()
    }
    else{

    }

}

/* <===================== CASO A - Á - Ã ====================>*/
function verificaLetraA(letra1, letra2, letra3){
    document.getElementById('tecla-' + letra1).disabled = true
    
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra1);
        comparaListasA(letra1, letra2, letra3)
        palavraNaTela()
    }
}

function comparaListasA(letra1, letra2, letra3){
    const pos1 = palavraSecretaSorteada.indexOf(letra1)
    const pos2 = palavraSecretaSorteada.indexOf(letra2)
    const pos3 = palavraSecretaSorteada.indexOf(letra3)
    if(pos1 < 0 && pos2 < 0 && pos3 < 0){
        tentativas = tentativas - 1
        carregaImagem()

    }
    else{
        for(let i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra1){
                listaDinamica[i] = letra1

            }
            else if(palavraSecretaSorteada[i] == letra2){
                listaDinamica[i] = letra2
            }
            else if(palavraSecretaSorteada[i] == letra3){
                listaDinamica[i] = letra3
        }
    }

    let vitoria = true
    for(let i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false
        }
    }
    if(vitoria == true){
        tentativas = 0
        document.getElementById('winning-message').style.display = 'flex'

    }
    if(tentativas == 0 && vitoria == false){
        
        document.getElementById('loser-message').style.display = 'flex'
    }
    
}
}

/////////////////////////////////////////////////////////////////


/* <========= CASO C - Ç ===========>*/
function verificaLetraC(letra1, letra2){
    document.getElementById('tecla-' + letra1).disabled = true
    
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra1);
        comparaListasC(letra1, letra2)
        palavraNaTela()
    }
}

function comparaListasC(letra1, letra2){
    const pos1 = palavraSecretaSorteada.indexOf(letra1)
    const pos2 = palavraSecretaSorteada.indexOf(letra2)
    if(pos1 < 0 && pos2 < 0){
        tentativas = tentativas - 1
        carregaImagem()

    }
    else{
        for(let i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra1){
                listaDinamica[i] = letra1

            }
            else if(palavraSecretaSorteada[i] == letra2){
                listaDinamica[i] = letra2
            }
        }
    }

    let vitoria = true
    for(let i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false
        }
    }
    if(vitoria == true){
        tentativas = 0
        document.getElementById('winning-message').style.display = 'flex'

    }
    if(tentativas == 0 && vitoria == false){
        
        document.getElementById('loser-message').style.display = 'flex'
    }
    
}
//////////////////////////////////////////////////////////////////////////

/* <========= CASO LETRAS NORMAIS ===========>*/
function verificaLetra(letra){
    document.getElementById('tecla-' + letra).disabled = true
    
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra)
        palavraNaTela()
    }

}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585"
    document.getElementById(tecla).style.color = "#ffffff"
}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas = tentativas - 1
        carregaImagem()
        //aparecer imagem 
        //verificar se há tentativas ainda

    }
    else{
        for(let i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra

            }
        }
    }
    let vitoria = true
    for(let i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false
        }
    }
    if(vitoria == true){
        tentativas = 0
        document.getElementById('winning-message').style.display = 'flex'

    }
    if(tentativas == 0 && vitoria == false){
        
        document.getElementById('loser-message').style.display = 'flex'
    }
    
}
///////////////////////////////////////////////////////////////////////

function carregaImagem(){
    const forca = document.getElementById('imagem')
    switch(tentativas){
        
        case 7: forca.style.background = 'url(./images/facil/img2.png)'
        break
        case 6: forca.style.background = 'url(./images/facil/img3.png)'
        break
        case 5: forca.style.background= 'url(./images/facil/img4.png)'
        break
        case 4: forca.style.background = 'url(./images/facil/img5.png)'
        break
        case 3: forca.style.background = 'url(./images/facil/img6.png)'
        break
        case 2: forca.style.background = 'url(./images/facil/img7.png)'
        break
        case 1: forca.style.background = 'url(./images/facil/img8.png)'
        break
        
        default: forca.style.background = 'url(./images/facil/img9.png)'
        break
    }
    
}

function redireciona(){
    window.location.href = "facil.html"
}

function menu(){
    window.location.href = "index.html"
}