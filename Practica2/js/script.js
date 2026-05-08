function calcularTodo() {
    // Obtener el valor del radio
    let radio = parseFloat(document.getElementById("radio").value);
    
    // Validar que sea un número válido y positivo
    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, ingresa un radio válido (número positivo)");
        return;
    }
    
    // Calcular área y circunferencia
    let area = Math.PI * radio * radio;
    let circunferencia = 2 * Math.PI * radio;
    
    // Mostrar resultados en la tabla con 2 decimales
    document.getElementById("area").innerHTML = area.toFixed(2);
    document.getElementById("circunferencia").innerHTML = circunferencia.toFixed(2);
}

// Opcional: Permitir calcular presionando Enter
document.getElementById("radio").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calcularTodo();
    }
});