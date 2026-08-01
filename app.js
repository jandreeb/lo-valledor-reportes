// CONFIGURACIÓN

const ciclo = [
"M","L",
"N","N","N","N","N","L","L",
"T","T","T","T","T","T","L",
"M","M","M","M","M","L",
"N","N","N","N","N","L","L",
"T","T","T","T","T","T","L"
];

// FECHA BASE DEL CICLO

const inicio = new Date("2026-08-01");

// FECHA DE HOY

const hoy = new Date();

inicio.setHours(0,0,0,0);
hoy.setHours(0,0,0,0);

const dias = Math.floor((hoy-inicio)/(1000*60*60*24));

const turno = ciclo[((dias%ciclo.length)+ciclo.length)%ciclo.length];

let nombreTurno="";

switch(turno){

case "M":
nombreTurno="🌞 Mañana";
break;

case "T":
nombreTurno="🌆 Tarde";
break;

case "N":
nombreTurno="🌙 Noche";
break;

default:
nombreTurno="🛌 Libre";

}

console.log(nombreTurno);
