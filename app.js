
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
