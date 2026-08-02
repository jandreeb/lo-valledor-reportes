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
