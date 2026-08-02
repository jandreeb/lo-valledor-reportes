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
