/*const medida = ["1p","Twin","2 1/2p","Queen","King"]

console.log(medida);
console.log(medida.includes("King"));
console.log(medida.indexOf("Queen"));

let seleccion = prompt(`Hola, indicanos la medida de tu cama:
                     1: Colchon de 80 o 90 x 190 cm,
                     2: Colchon de 100 x 200 cm,
                     3: Colchon de hasta 150 x 190 cm,
                     4: Colchon de 160 x 200 cm,
                     5: Colchon de 180 a 200 x 200 cm`);

while (seleccion){

  if (seleccion=="1"){
        alert("Tu cama es 1 1/2 plaza!");
        console.log("Tu cama es 1 1/2 plaza!");
        break;
        }
    if (seleccion=="2"){
        alert("Tu cama es Twin size!");
        console.log("Tu cama es Twin size!");
        break;    
        }
    if (seleccion=="3"){
        alert("Tu cama es 2 1/2 plaza!");
        console.log("Tu cama es 2 1/2 plaza!");
        break;
        }
    if (seleccion=="4"){
        alert("Tu cama es Queen size!");
        console.log("Tu cama es Queen size!");
        break;
        }    
    if (seleccion=="5"){
        alert("Tu cama es King size!");
        console.log("Tu cama es King size!");
        break;
        }
    else {
        alert("Opción invalida");
        console.log("Opción invalida");
        break;
        }
}
*/
/*
class Productos {
    constructor(nombre, medida, composicion, precio, info){
        this.nombre = nombre
        this.medida = medida
        this.composicion = composicion
        this.precio = precio
        this.info = info
        this.compra = false
    }

    comprar(){
        if (this.compra == false){
        alert("Iniciando compra");
        this.compra = true;
        }
        else {
            this.compra = false;
            alert("Aguarde un momento, ha surgido un problema!");
        }
    }
    pagar(){
        if (this.compra == true){
        alert("Compra realizada con exito");
        this.compra = false;
        }
        else {
        alert("Su pago no fue proceado! Por favor, reintentarlo nuevamente")
        }    
    }
    
    mostrarInfo(){
        return (`
        Nombre: ${this.nombre}; 
        Medida: ${this.medida};
        Composicion: ${this.composicion};
        Precio: ${this.precio};    
            `)
    }
}

class Sabanas extends Productos{
    constructor(nombre, medida, composicion, precio, estilo){
        super(nombre, medida, composicion, precio,);
        this.estilo = estilo;
    }

    informacion(){
      return (this.mostrarInfo() + `Estilo: ${this.estilo}`);
    }
}

sab1 = new Sabanas ("sabanas", "Twin", "50% algodon 50% poliester", "5800", "estampada");
sab2 = new Sabanas ("sabanas", "2 1/2p", "100% algodon", "7800", "lisa");

producto1 = new Productos ("cubrecama", "king", "100% algodon", "15000");
producto2 = new Productos ("frazada", "Queen", "microfibra - 100% poliester", "8500");
producto3 = new Productos ("plumon sintetico", "2 1/2p", "microfibra - 100% poliester", "12800");
producto4 = new Productos ("sabanas", "Twin", "50% algodon 50% poliester", "5800", "estampada");
producto5 = new Productos ("sabanas", "1p", "Mixta 50% algodon 50% poliester", "3550", "lisa");


sab1.comprar();
sab1.pagar();
console.log(sab1.informacion());

sab2.comprar();
sab2.pagar();
console.log(sab2.informacion());

producto1.comprar();
producto1.pagar();
console.log(producto1.mostrarInfo());

producto2.comprar();
producto2.pagar();
console.log(producto2.mostrarInfo());

function mayorQue(num) {
    return (m) => (num) > m;
}

let mayorQ = mayorQue(8)
console.log(mayorQ);

function operacion(op) {
    if (op == "sumar") {
        return (a,b) => (a + b);
    } 
    else if (op == "restar") {
        return (a,b) => (a-b);
    }
}

let suma = operacion("sumar");
let resta = operacion("restar");

console.log(resta(40,55));
console.log(suma(33,75));

function recorre(arra, func) {
    for(const pos of arra){
        func(pos)
    }
}

const numeros = [53, 76, 33, 1, 7];
recorre(numeros, console.log);

let total = "";

function acumular(muchas) {   //ideal para usar con numeros
    total += muchas
}

recorre(numeros, acumular);
console.log(total);

const duplicado = [];

recorre(numeros, (pos) => {
    duplicado.push(pos * 2);
})

console.log(duplicado);

let total = 0
for (let i = 1; i <= 10; i++) {
    total += i
}
console.log(total);

console.log(sumarRango(1,10));*/

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined

const Productos = [
    {nombre: "cubrecama", medida: "king", composicion: "100% algodon", precio: 15000},
    {nombre: "frazada", medida: "Queen", composicion: "microfibra - 100% poliester", precio: 8500},
    {nombre: "plumon sintetico", medida: "2 1/2p", composicion: "microfibra - 100% poliester", precio: 12800},
    {nombre: "sabanas", medida: "Twin", composicion: "50% algodon 50% poliester", precio: 5800, estilo: "estampada"},
    {nombre: "sabanas", medida: "1p", composicion: "Mixta 50% algodon 50% poliester", precio: 3550, estilo: "lisa"},
]

const busqueda = Productos.find((el) => el.nombre == "frazada");
const busqueda1 = Productos.find((el) => el.medida == "Twin");

console.log(busqueda);
console.log(busqueda1);

const busqueda2 = Productos.filter((el) => el.nombre == "sabanas");
const busqueda3 = Productos.filter((el) => el.medida == "Twin");

console.log(busqueda2);
console.log(busqueda3);

const actualizado = Productos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})

document.write(actualizado);
console.log(actualizado);

prueba = document.getElementsByClassName("prueba");
document.write(prueba)

camposs = document.getElementsByClassName("camposs");
camposs.placeholder("hhjkk");
camposs.setAttribute("klñ{{")

prueba = document.getElementsByClassName("prueba");
prueba.style.paddingTop= "100px";
