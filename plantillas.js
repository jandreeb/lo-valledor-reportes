// ===============================
// PLANTILLAS DE REPORTES
// ===============================

function crearAmbulante(datos){

    return `*Procedimiento:*
Desalojo de comercio ambulante informal

*Detalles del procedimiento:*
A las ${datos.hora} hrs, con ${datos.detectado.toLowerCase()} se procede a desalojar del mercado a una persona, la cual se encontraba realizando comercio ambulante no autorizado (venta de ${datos.especie}). Se entregan verbalmente las normativas del mercado, quedando en conocimiento de la falta cometida, lo que motivó su desalojo sin más novedades.

*Calle/Postura/Patio:*
${datos.lugar}, ${datos.patio}

*Desalojada por Puerta:*
${datos.puerta}

*Procedimiento realizado por:*
*${datos.nombre} - ${datos.indicativo} - ${datos.patio}*

*Nombre Jefe Cuadrante:*
*${datos.jefeCuadrante}*

*Nombre Jefe de Mercado:*
*${datos.jefeMercado}*`;

}
console.log("Plantillas cargadas");

function crearNotificacion(datos){

    return `*Procedimiento:*
Notificación

*Detalles del procedimiento:*
A las ${datos.hora} hrs se notifica a ${datos.persona} respecto de ${datos.motivo}. La persona queda en conocimiento de la situación sin más novedades.

*Calle/Postura/Patio:*
${datos.lugar}, ${datos.patio}

*Procedimiento realizado por:*
*${datos.nombre} - ${datos.indicativo} - ${datos.patio}*

*Nombre Jefe Cuadrante:*
*${datos.jefeCuadrante}*

*Nombre Jefe de Mercado:*
*${datos.jefeMercado}*`;

}
