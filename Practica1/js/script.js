function pintar(){

    let color = prompt("Escribe un color: rojo, azul o amarillo");

    switch (color) {
        case "rojo":
            document.body.style.backgroundColor = "Red"
        break;
        
        case "azul":
            document.body.style.backgroundColor = "Blue"
        break;
        
        case "amarillo":
            document.body.style.backgroundColor = "Yellow"
        break;
        
        default:
            alert("NO EXISTE EL COLOR ");
    }
}