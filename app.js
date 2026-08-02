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
// ===============================
// VENTANA AMBULANTE
// ===============================

const btnAmbulante = document.getElementById("btnAmbulante");
const formAmbulante = document.getElementById("formAmbulante");
const cerrarAmbulante = document.getElementById("cerrarAmbulante");

if(btnAmbulante){

    btnAmbulante.addEventListener("click", ()=>{

        formAmbulante.style.display="block";

        const ahora = new Date();

        const horas = String(ahora.getHours()).padStart(2,"0");
        const minutos = String(ahora.getMinutes()).padStart(2,"0");

        document.getElementById("horaAmbulante").value =
        `${horas}:${minutos}`;

    });

}

if(cerrarAmbulante){

    cerrarAmbulante.addEventListener("click", ()=>{

        formAmbulante.style.display="none";

    });

}
// ===============================
// GENERAR PROCEDIMIENTO AMBULANTE
// ===============================

const generarAmbulante = document.getElementById("generarAmbulante");

if(generarAmbulante){

    generarAmbulante.addEventListener("click", ()=>{

        const hora = document.getElementById("horaAmbulante").value;
        const detectado = document.getElementById("detectadoPor").value;
        const lugar = document.getElementById("lugarAmbulante").value;
        const especie = document.getElementById("especieAmbulante").value;
        const puerta = document.getElementById("puertaAmbulante").value;

        const reporte = `*Procedimiento:*
Desalojo de comercio ambulante informal

*Detalles del procedimiento:*
A las ${hora} hrs, con ${detectado.toLowerCase()} se procede a desalojar del mercado a una persona, la cual se encontraba realizando comercio ambulante no autorizado (venta de ${especie}). Se entregan verbalmente las normativas del mercado, quedando en conocimiento de la falta cometida, lo que motivó su desalojo sin más novedades.

*Calle/Postura/Patio:*
${lugar}

*Desalojada por Puerta:*
${puerta}

*Procedimiento realizado por:*
${indicativo.value} - ${patio.value}

*Nombre Jefe de Mercado:*
${jefe.value}`;

        navigator.clipboard.writeText(reporte);

        alert("✅ Procedimiento copiado al portapapeles.");

        formAmbulante.style.display = "none";

    });

}
