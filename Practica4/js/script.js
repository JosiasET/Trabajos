// Obtener elementos
const montoInput = document.getElementById('monto');
const interes15 = document.getElementById('interes15');
const total15 = document.getElementById('total15');
const interes135 = document.getElementById('interes135');
const total135 = document.getElementById('total135');
const interes9 = document.getElementById('interes9');
const total9 = document.getElementById('total9');

// Función para formatear dinero
function formatear(numero) {
    return '$' + numero.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Función para calcular
function calcular() {
    let monto = parseFloat(montoInput.value);
    
    // Validar
    if (isNaN(monto) || monto <= 0) {
        interes15.textContent = '$0';
        total15.textContent = '$0';
        interes135.textContent = '$0';
        total135.textContent = '$0';
        interes9.textContent = '$0';
        total9.textContent = '$0';
        return;
    }
    
    // Calcular 15%
    let int15 = monto * 0.15;
    let tot15 = monto + int15;
    
    // Calcular 13.5%
    let int135 = monto * 0.135;
    let tot135 = monto + int135;
    
    // Calcular 9%
    let int9 = monto * 0.09;
    let tot9 = monto + int9;
    
    // Mostrar resultados
    interes15.textContent = formatear(int15);
    total15.textContent = formatear(tot15);
    interes135.textContent = formatear(int135);
    total135.textContent = formatear(tot135);
    interes9.textContent = formatear(int9);
    total9.textContent = formatear(tot9);
}

// Escuchar cambios en el input
montoInput.addEventListener('input', calcular);

// Calcular al cargar
calcular();