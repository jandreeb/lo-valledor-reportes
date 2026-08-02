// ===============================
// TURNO AUTOMÁTICO LV ASSISTANT
// ===============================

const inicioCiclo = new Date(2026, 7, 1); // 1 Agosto 2026

const ciclo = [

"M","L",
"N","N","N","N","N","L","L",
"T","T","T","T","T","T","L",
"M","M","M","M","M","L",
"N","N","N","N","L","L",
"T","T"

];

const hoy = new Date();

const msDia = 1000 * 60 * 60 * 24;

const dias = Math.floor((hoy - inicioCiclo) / msDia);

const turno = ciclo[((dias % ciclo.length) + ciclo.length) % ciclo.length];

let texto = "";

switch(turno){

case "M":
texto = "🌅 Mañana\n07:00 - 14:30";
break;

case "T":
texto = "🌇 Tarde\n14:30 - 22:00";
break;

case "N":
texto = "🌙 Noche\n22:00 - 07:00";
break;

default:
texto = "🛌 Libre";

}

document.getElementById("turnoHoy").textContent = texto;
