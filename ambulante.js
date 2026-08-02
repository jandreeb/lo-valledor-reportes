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
        const detectado = document.getElementById("deteccionAmbulante").value;
        const lugar = document.getElementById("lugarAmbulante").value;
        const especie = document.getElementById("productoAmbulante").value;
        const puerta = document.getElementById("puertaAmbulante").value;

        const datos = {
    hora,
    detectado,
    lugar,
    especie,
    puerta,
    nombre: CONFIG.nombre,
    indicativo: indicativo.value,
    patio: patio.value,
    jefeCuadrante: jefe.value,
    jefeMercado: CONFIG.jefeMercado || "Pendiente"
};

const reporte = crearAmbulante(datos);

        navigator.clipboard.writeText(reporte);

        alert("✅ Procedimiento copiado al portapapeles.");

        formAmbulante.style.display="none";

    });

}
