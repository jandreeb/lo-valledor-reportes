// ======================================
// LV Assistant v1.0
// Sistema de Reportes Lo Valledor
// ======================================

const btnGuardar = document.getElementById("guardarSemana");

const indicativo = document.getElementById("indicativo");
const patio = document.getElementById("patio");
const jefe = document.getElementById("jefe");

//======================
// CARGAR CONFIGURACIÓN
//======================

window.onload = () => {

    if(localStorage.getItem("indicativo"))
        indicativo.value = localStorage.getItem("indicativo");

    if(localStorage.getItem("patio"))
        patio.value = localStorage.getItem("patio");

    if(localStorage.getItem("jefe"))
        jefe.value = localStorage.getItem("jefe");

}

//======================
// GUARDAR
//======================

btnGuardar.addEventListener("click",()=>{

    localStorage.setItem("indicativo",indicativo.value);

    localStorage.setItem("patio",patio.value);

    localStorage.setItem("jefe",jefe.value);

    alert("✅ Configuración semanal guardada");

});

//======================
// BOTONES DE MENÚ
//======================

const botones=document.querySelectorAll(".menuBtn");

botones.forEach(boton=>{

    boton.addEventListener("click",()=>{

        alert("Próximamente: "+boton.innerText);

    });

});
