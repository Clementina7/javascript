let medida = prompt("Ingrese el ancho de su colchon en cm (xej: 150)")
while (medida >= 0){

    if (medida >= 80 && medida <= 90){
        alert(medida + "cm Tu cama es 1 1/2 plaza!")
        console.log(medida + "cm Tu cama es 1 1/2 plaza!")
        break;
        }
    if (medida == 100){
        console.log(medida + "cm Tu cama es Twin Size!")  
        break;   
        }
    if (medida >= 130 && medida <= 150){
        console.log(medida + "cm Tu cama es 2 1/2 plazas!")
        break;  
        }
    if (medida == 160){
        console.log(medida + "cm Tu cama es Queen Size!")
        break;
        }
    if (medida >= 180 && medida <= 200){
        console.log(medida + "cm Tu cama es King Size!")
        break; 
        }
    else {
        console.log(medida + "cm Perdon! Pero esa medida no trabajamos!")
        break;
    }
}