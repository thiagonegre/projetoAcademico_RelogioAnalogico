const ponteiroSegundos = document.getElementById('segundos');
const ponteiroMinutos = document.getElementById('minutos');
const ponteiroHoras = document.getElementById('horas');

function clockTick (){
    const date = new Date ();
    const segundos = date.getSeconds () / 60;
    const minutos = (segundos + date.getMinutes()) / 60;
    const horas = (minutos +  date.getHours()) /12

    rotateClockHand(ponteiroSegundos, segundos);
    rotateClockHand(ponteiroMinutos, minutos);
    rotateClockHand(ponteiroHoras, horas);
    

}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);

}
setInterval(clockTick, 1000);