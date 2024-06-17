document.addEventListener("DOMContentLoaded", () => {

const numeroTurno = document.getElementById("numero-turno") as HTMLElement;
const btnSiguiente = document.getElementById("siguiente") as HTMLButtonElement;
const btnAnterior = document.getElementById("anterior") as HTMLButtonElement;
const btnReset = document.getElementById("reset") as HTMLButtonElement;
const inputTurno = document.getElementById("turno-input") as HTMLInputElement;
const btnCambiarTurno = document.getElementById("cambiarTurno") as HTMLButtonElement;

let turno = 1;

function nuevoTurno() {
    numeroTurno.textContent = turno.toString().padStart(2,'0'); 
};

function cambiarTurno (turnoManual : number){
    turno = turnoManual;
    nuevoTurno();
}

btnSiguiente.addEventListener("click", () => {
    turno++;
    nuevoTurno();
});

btnAnterior.addEventListener("click", () => {
    if(turno > 0) {
        turno--;
    }
    nuevoTurno();
});

btnReset.addEventListener("click", () => {
    turno = 0;
    nuevoTurno();
});

btnCambiarTurno.addEventListener("click", () => {
    const nuevoValor = parseInt(inputTurno.value, 10)
    if (!isNaN(nuevoValor)){
        cambiarTurno(nuevoValor);
        inputTurno.value = '';
    } else {
        alert("Ingrese un numero válido")
    }
});

nuevoTurno();
});
