let stockProductos = [
    {id: 1, nombre: "Sabanas", medida: "King" , composicion: "100% algodón - 180 hilos", estilo: "lisas", precio: "4500", img: ""}, 
    {id: 2, nombre: "Sabanas", medida: "Queen" , composicion: "100% algodón - 180 hilos", estilo: "estampadas", precio: "4500", img: ""}, 
    {id: 3, nombre: "Sabanas", medida: "2 1/2p" , composicion: "100% algodón - 180 hilos", estilo: "lisas", precio: "4500", img: ""}, 
    {id: 4, nombre: "Sabanas", medida: "1p" , composicion: "100% algodón - 200 hilos", estilo: "lisas", precio: "4500", img: ""}, 
    {id: 5, nombre: "Sabanas", medida: "Twin" , composicion: "100% algodón - 200 hilos", estilo: "estampadas", precio: "4500", img: ""}, 
    {id: 6, nombre: "Sabanas", medida: "King" , composicion: "100% algodón - 200 hilos", estilo: "estampadass", precio: "4500", img: ""}, 
    {id: 7, nombre: "Sabanas", medida: "King" , composicion: "100% algodón - 200 hilos", estilo: "lisas", precio: "4500", img: ""}, 
    {id: 8, nombre: "Sabanas", medida: "Queen" , composicion: "50% algodón 50% poliester", estilo: "estampadas", precio: "4500", img: ""}, 
    {id: 9, nombre: "Sabanas", medida: "Queen" , composicion: "50% algodón 50% poliester", estilo: "estampadas", precio: "4500", img: ""}, 
    {id: 10, nombre: "Sabanas", medida: "Twin" , composicion: "50% algodón 50% poliester", estilo: "lisas", precio: "4500", img: ""}, 
    {id: 11, nombre: "Sabanas", medida: "Twin" , composicion: "50% algodón 50% poliester", estilo: "lisas", precio: "4500", img: ""}, 
    {id: 12, nombre: "Sabanas", medida: "Twin" , composicion: "50% algodón 50% poliester", estilo: "estampadas", precio: "4500", img: ""}, 
    {id: 13, nombre: "Sabanas", medida: "2 1/2p" , composicion: "50% algodón 50% poliester", estilo: "estampadas", precio: "4500", img: ""}, 
    {id: 14, nombre: "Sabanas", medida: "2 1/2p" , composicion: "50% algodón 50% poliester", estilo: "estampadas", precio: "4500", img: ""}, 
    {id: 15, nombre: "Sabanas", medida: "1p" , composicion: "50% algodón 50% poliester", estilo: "lisas", precio: "4500", img: ""}, 
    {id: 16, nombre: "Sabanas", medida: "1p" , composicion: "50% algodón 50% poliester", estilo: "lisas", precio: "4500", img: ""}, 
    {id: 17, nombre: "Sabanas", medida: "Queen" , composicion: "50% algodón 50% poliester", estilo: "lisas", precio: "4500", img: ""},
]


/*Vimos algunas formas mejores en la clase, como por ejemplo, usar las propiedades innerHTML e 
innerText, utilizar los metodos createElement() y appendChild() y especialmente, aprovechar los 
template strings. Por ejemplo, podes probar lo siguiente:

	for (let el of actualizado) {
   		document.write(el.nombre + " ");
   		document.write("$" + el.precio);
   		document.write('<br>');
	}

o lo siguiente

	for (let prod of Productos) {
   		let div = document.createElement("div");
   		div.innerHTML = `
        	<h3>${prod.nombre}</h3>
        	<b>Tamanio: ${prod.medida}</b><br/>
        	<i>${prod.composicion}</i>
        	<h4>$${prod.precio}</h4> `;

   		document.body.appendChild(div);
    }

Asi, podemos mostrar informacion del script en el html. Con un poco de estilos de css, queda a 
tono con el resto del diseño.*/