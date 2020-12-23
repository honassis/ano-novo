const dia_id = document.getElementById("days");
const hora_id = document.getElementById("hours");
const min_id = document.getElementById("mins");
const sec_id = document.getElementById("seconds");

const contador = "01/01/2021 00:00";

function contagem() {
    const contador_calc = new Date(contador);
    const agora = new Date();

    const totalSeconds = (contador_calc - agora) / 1000;

    const dia = Math.floor(totalSeconds / 3600 / 24);
    const hora = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;

    dia_id.innerHTML = timeZero(dia);
    hora_id.innerHTML = timeZero(hora);
    min_id.innerHTML = timeZero(min);
    sec_id.innerHTML = timeZero(sec);
}

function timeZero(time) {
    if(time < 10){
        return "0"+time;
    }else{
        return time;
    }
}

contagem();

setInterval(contagem, 1000);
