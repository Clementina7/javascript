/*


*/
/*
class Productos {
    constructor(nombre, medida, composicion, precio, info){
        this.nombre = nombre
        this.medida = medida
        this.composicion = composicion
        this.precio = precio
        this.info = info
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

*/

const Productos = [
    {nombre: "cubrecama", medida: "king", composicion: "100% algodon", precio: 15000},
    {nombre: "frazada", medida: "Queen", composicion: "microfibra - 100% poliester", precio: 8500},
    {nombre: "plumon sintetico", medida: "2 1/2p", composicion: "microfibra - 100% poliester", precio: 12800},
    {nombre: "sabanas", medida: "Twin", composicion: "50% algodon 50% poliester", precio: 5800, estilo: "estampada"},
    {nombre: "sabanas", medida: "1p", composicion: "Mixta 50% algodon 50% poliester", precio: 3550, estilo: "lisa"},
]

const actualizado = Productos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})

document.write(actualizado);
console.log(actualizado);

for (let el of actualizado) {
    document.write(el.nombre + " ");
    document.write("$" + el.precio);
    document.write('<br>');
}


for (let prod of Productos) {
    let div = document.createElement("div");
    div.innerHTML = `
     <h4><b>${prod.nombre}</b></h4>
     Medida: ${prod.medida}<br/>
     <i>${prod.composicion}</i>
     <h6><b>$${prod.precio}</b></h6> `;

    document.body.appendChild(div);
}
