function tocaSom(seletorAudio){// quem usar essa função, por favor informe o elemento áudio  

    const elemento = document.querySelector(seletorAudio)}    
    if( elemento  && elemento.localName === 'audio'){
elemento.play();
    } 
    else{ 
        console.log('elemento não encontrado ou seletor inválido')
    }


const listaDeTeclas = document.querySelectorAll('.tecla');


for( let contador = 0; contador < listaDeTeclas.length;contador ++ ){
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1]

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){ 
        tocaSom(idAudio)// para acionar eventos eu faço assim 
    };// ela optou por usar uma funçao anonima, isto é, sem nome so passa valor 

    tecla.onkeydown = function (evento ){
        if (evento.code == 'Space' || evento.code == 'Enter'){
        tecla.classList.add('ativa')
    }}}
   
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
