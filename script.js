const buttonStart = document.querySelector("#button-iniciar");
const buttonParar = document.querySelector("#button-parar");
const buttonPausar = document.querySelector("#button-pausar");
const display = document.querySelector("#display");

var segundos = 0;
var minutos = 0;
var horas = 0;
var intervalo;

function start(){
    intervalo = setInterval(contador, 1000);
}

function pause(){
    clearInterval(intervalo);
}

function parar(){
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    display.innerHTML = ajustaContador(horas) + ':' + ajustaContador(minutos) + ':' + ajustaContador(segundos);
}

function contador(){
    segundos++;
    if(segundos > 60){
        minutos++;
        segundos = 0;
    }

    if(minutos > 60){
        horas++;
        minutos = 0;
    }
    
    display.innerHTML = ajustaContador(horas) + ':' + ajustaContador(minutos) + ':' + ajustaContador(segundos);
}

function ajustaContador(tempo){
    if(tempo < 10) return '0' + tempo;
    else return tempo;
}


buttonStart.addEventListener('click', start);
buttonParar.addEventListener('click', parar);
buttonPausar.addEventListener('click', pause);