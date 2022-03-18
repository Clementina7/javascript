// app.js //


let carritoDeCompras = []

const articulos = document.getElementById('articulos'); 
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selectMedidas= document.getElementById('selectMedidas');
const buscador = document.getElementById('search');



//filtro//
selectMedidas.addEventListener('change', ()=>{
    console.log(selectMedidas.value);
    if(selectMedidas.value == 'all'){
        mostrarProductos(stockProductos);
    }else{
        mostrarProductos(stockProductos.filter(el => el.medida == selectMedidas.value));
        console.log(stockProductos.filter(el => el.medida == selectMedidas.value));
    }
})

//Buscador
buscador.addEventListener('input', ()=>{
    if (buscador.value == "") {
        mostrarProductos(stockProductos)
    }else{
        mostrarProductos(stockProductos.filter(el => el.nombre.toLowerCase().includes(buscador.value.toLowerCase())))
    }
})


//logica Ecommerce

mostrarProductos(stockProductos)

function mostrarProductos(array){
   articulos.innerHTML =''; //contenedorProductos//
    for (const producto of array) {
        let div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML += 
        `<div class="card">
           <div class="card-image">
            <img id="imagen" src=${producto.img}>
            <span class="card-title">${producto.nombre}</span>
            <a id="botonAgregar${producto.id}" class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">add_shopping_cart></i></a>
           </div>
           <div class="card-content">
           <p>${producto.composicion}</p>
           <p>Medida: ${producto.medida}</p>
           <p> $${producto.precio}</p>
           </div>
        </div> `
                        
        articulos.appendChild(div);
        
        
        let btnAgregar = document.getElementById(`botonAgregar${producto.id}`)
        // console.log(btnAgregar)
    
        btnAgregar.addEventListener('click',()=>{

            agregarAlCarrito(producto.id)
        })
    }
    
}


function agregarAlCarrito(id) {
    let repetido = carritoDeCompras.find(item => item.id == id)
    if(repetido){
        console.log(repetido)
        repetido.cantidad = repetido.cantidad + 1
        document.getElementById(`cantidad${repetido.id}`).innerHTML = `<p id= cantidad${repetido.id}>Cantidad:${repetido.cantidad}</p>`
        actualizarCarrito()
    } 
    else{
        let productoAgregar = stockProductos.find(elemento => elemento.id == id)
        // console.log(productoAgregar)
        carritoDeCompras.push(productoAgregar)
        actualizarCarrito()
        let div = document.createElement('div')
        div.className = 'productoEnCarrito'
        div.innerHTML =`
            <p>${productoAgregar.nombre}</p>
            <p>Precio: $${productoAgregar.precio}</p>
            <p id= cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>
            <button id= botonEliminar${productoAgregar.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)
    
        let btnEliminar = document.getElementById(`botonEliminar${productoAgregar.id}`)
        btnEliminar.addEventListener('click',()=>{
            console.log(productoAgregar.id);
            btnEliminar.parentElement.remove()                         
            carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != productoAgregar.id)
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        })
    }

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
}   


function  actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
}


function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    console.log(recuperarLS);
    if(recuperarLS){
        recuperarLS.forEach(element => {
            agregarAlCarrito(element.id)
        });
    }
}

recuperar();


// modal.js //

const carritoAbrir = document.getElementById('boton-carrito');
const carritoCerrar = document.getElementById('carritoCerrar');

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

carritoAbrir.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
carritoCerrar.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
modalCarrito.addEventListener('click',(e)=>{
    e.stopPropagation()
})
contenedorModal.addEventListener('click', ()=>{
    carritoCerrar.click()
})