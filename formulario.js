/*
alert("Holaaaa Mundooo") //mensaje en pantalla
prompt("Ingrese su color preferido") //permite ingresar dato pero no se guarda
let color = prompt("Ingrese su color preferido") //guarda el valor en una variable
alert("Su color preferido es " + color)

let nombre = "Jesica "
let apellido = "Baez"
let nombreCompleto = nombre + apellido
console.log(nombreCompleto)

let num1 = 34
let num2 = 900
let suma = num1 + num2
console.log(suma)

if (suma == 934){
    console.log("Sólo sé q nosé nada")
}
else {
    console.log("Pies pa q los quiero, si tengo alas para volar")
}

let num = 0;
do {
    num = prompt("Ingrese un numero");
    console.log(num);
}
while(parseInt(num)){
    console.log("correcto")
};

let num = 3 //desde
while(num <=10){ //hasta
    alert(num)
    console.log(num)
    num ++//Incrementa 1 q es igual a num = num + 1 o num + = 1 tmabien llamada "actualización"            
}
alert("El número es mayor a 10")//me lo muestra en el navegador
  console.log("El número es mayor a 10")//me lo muestra en la terminal


for(num = prompt("Ingrese un valor"); num < 10; num ++){
    alert(num +" segui haciendo click")
    console.log("todo perfecto")
}  

//Tabla de multiplicar
let num = parseInt(prompt("Ingresé el valor de la tabla de multiplicar (xej.2)"));
for (let tabla = 0; tabla <= 10; tabla++){
    let resultado = num * tabla;
    alert(num + " X " + tabla +" = "+ resultado);
}

let nombre = prompt("Ingresar un nombre").toLowerCase()
while(nombre != "ESC"){
    switch(nombre){
        case "ana":
            alert("Hola Ana")
            break;
        case "julio":
            alert("Hola Julio")
            break;     
        default:
            alert("Quién sos?")
            break;
    }
   nombre = prompt("Ingresar un nombre");
} 
*/

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