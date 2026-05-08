// Arreglo de artistas
let artistas = [
    "Michael Jackson",
    "Taylor Swift",
    "Bad Bunny",
    "Luis Miguel"
];

// Arreglo de datos [día, mes, año]
let datos = [
    [10, 13, 1972],  // Michael Jackson
    [10, 14, 2006],  // Taylor Swift
    [5, 3, 2018],    // Bad Bunny
    [22, 6, 1982]    // Luis Miguel
];

// Función para mostrar todos los datos en la tabla
function mostrarDatos() {
    let tabla = document.getElementById("tablaDatos");
    let tbody = tabla.getElementsByTagName('tbody')[0];
    
    // Limpiar el contenido actual del tbody
    tbody.innerHTML = "";
    
    // Recorrer los arreglos y crear las filas
    for (let i = 0; i < artistas.length; i++) {
        let dia = datos[i][0];
        let mes = datos[i][1];
        let año = datos[i][2];
        let fechaCompleta = `${dia}/${mes}/${año}`;
        
        // Crear una nueva fila
        let fila = tbody.insertRow();
        
        // Insertar celdas con los datos
        fila.insertCell(0).innerHTML = artistas[i];
        fila.insertCell(1).innerHTML = dia;
        fila.insertCell(2).innerHTML = mes;
        fila.insertCell(3).innerHTML = año;
        fila.insertCell(4).innerHTML = fechaCompleta;
    }
}

// Función para limpiar la tabla
function limpiarTabla() {
    let tabla = document.getElementById("tablaDatos");
    let tbody = tabla.getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";
}

// Mostrar los datos automáticamente al cargar la página
window.addEventListener('load', function() {
    mostrarDatos();
});