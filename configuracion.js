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
