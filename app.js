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

const turnoElemento = document.getElementById("turnoHoy");

if (turnoElemento) {
    turnoElemento.textContent = nombreTurno;
}

// ===============================
// CONFIGURACIÓN GUARDADA
// ===============================

const indicativo = document.getElementById("indicativo");
const patio = document.getElementById("patio");
const jefe = document.getElementById("jefe");

// Cargar configuración guardada
window.addEventListener("load", () => {

    if(localStorage.getItem("indicativo")){
        indicativo.value = localStorage.getItem("indicativo");
    }

    if(localStorage.getItem("patio")){
        patio.value = localStorage.getItem("patio");
    }

    if(localStorage.getItem("jefe")){
        jefe.value = localStorage.getItem("jefe");
    }

});

// Guardar configuración
function guardarConfiguracion(){

    localStorage.setItem("indicativo", indicativo.value);
    localStorage.setItem("patio", patio.value);
    localStorage.setItem("jefe", jefe.value);

    alert("✅ Configuración guardada correctamente.");

}

// Conectar botón
const botonGuardar = document.getElementById("guardarSemana");

if(botonGuardar){
    botonGuardar.addEventListener("click", guardarConfiguracion);
}

// ===============================
// MENSAJE MOTIVADOR
// ===============================

const hora = new Date().getHours();

let saludo = "";

if(hora >= 5 && hora < 12){

    saludo = "🌅 ¡Buenos días! Que tengas un turno tranquilo y sin novedades.";

}else if(hora >=12 && hora <18){

    saludo = "💪 Vas excelente. Sigue atento y mantén el control del sector.";

}else{

    saludo = "🌙 Buen trabajo. Cada procedimiento bien realizado hace un mercado más seguro.";

}

console.log(saludo);

// ===============================
// AGREGAR INDICATIVOS
// ===============================

const botonAgregar = document.getElementById("agregarIndicativo");

if (botonAgregar) {

    let lista = JSON.parse(localStorage.getItem("listaIndicativos")) || [
        "F1",
        "F2",
        "Delta",
        "Principal 2",
        "Recorrido"
    ];

    function cargarIndicativos() {

        indicativo.innerHTML = "";

        lista.forEach(nombre => {

            const opcion = document.createElement("option");

            opcion.textContent = nombre;
            opcion.value = nombre;

            indicativo.appendChild(opcion);

        });

        if(localStorage.getItem("indicativo")){
            indicativo.value = localStorage.getItem("indicativo");
        }

    }

    cargarIndicativos();

    botonAgregar.addEventListener("click", () => {

        const nuevo = prompt("Nuevo indicativo:");

if(!nuevo) return;

if(lista.includes(nuevo)){
    alert("Ese indicativo ya existe.");
    return;
}

lista.push(nuevo);

        localStorage.setItem("listaIndicativos", JSON.stringify(lista));

        cargarIndicativos();

        indicativo.value = nuevo;

    });

}
