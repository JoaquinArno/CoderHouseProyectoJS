const articulosCarrito = JSON.parse(localStorage.getItem("carrito")) ?? [];

const carrito = articulosCarrito;

const total = carrito.reduce((acumulador, articulo) => acumulador + articulo.precio, 0);

document.getElementById("total-carrito").innerHTML = `${carrito.length}  - $${total}`;

carrito.forEach ((articulo) => {

document.getElementById("elementos-carrito").innerHTML += 

   `<tr>
      <th scope="row">${articulo.id}</th>
      <td><img src="${articulo.img}" style="width:75px"></td>
      <td>${articulo.titulo}</td>
      <td>$${articulo.precio}</td>
   </tr>`
})


const articulos = [

    {
        id: 1, tapa: 'Dura', titulo: 'El Señor de los Anillos', autor: 'J. R. R. Tolkien', genero: 'Fantasía', paginas: 1200, stock: 150, precio: 4500,
        img:"Imagenes/ElSeñorDeLosAnillos.png"
    },

    {
        id: 2, tapa: 'Dura', titulo: 'La Divina Comedia', autor: 'Dante Alighieri', genero: 'Epopeya', paginas: 322, stock: 150, precio: 2900,
        img: "Imagenes/LaDivinaComedia.png"
    },

    {
        id: 3, tapa: 'Blanda', titulo: 'Fahrenheit 451', autor: 'Ray Bradbury', genero: 'Ciencia ficcon', paginas: 280, stock: 120, precio: 3000,
        img: "Imagenes/Fahrenheit451.png"
    },

    {
        id: 4, tapa: 'Blanda', titulo: 'El cuento del Grial', autor: 'Chrétien de Troyes', genero: 'Romance de caballería', paginas: 180, 
        stock: 420, precio: 3800, img: "Imagenes/ElCuentoDelGrial.png"
    },

    {
        id: 5, tapa: 'Blanda', titulo: 'Demian', autor: 'Herman Hesse', genero: 'Novela filosófica', paginas: 200, stock: 200, precio: 2500,
        img: "Imagenes/Demian.png"
    },

    {
        id: 6, tapa: 'Blanda', titulo: 'Macbeth', autor: 'William Shakespeare', genero: 'Tragedia', paginas: 130, stock: 90, precio: 3600,
        img: "Imagenes/Macbeth.png"
    },

    {
        id: 7, tapa: 'Blanda', titulo: 'Hambre', autor: 'Knut Hamsun', genero: 'Drama', paginas: 150, stock: 300, precio: 3000,
        img: "Imagenes/Hambre.png"
    },

    {
        id: 8, tapa: 'Blanda', titulo: '1984', autor: 'George Orwell', genero: 'Ciencia ficcon', paginas: 320, stock: 100, precio: 2700,
        img: "Imagenes/1984.png"
    },

    {
        id: 9, tapa: 'Blanda', titulo: 'El Aleph', autor: 'Jorge L. Borges', genero: 'Cuentos', paginas: 201, stock: 500, precio: 1800,
        img: "Imagenes/ElAleph.png"
    },

    {
        id: 10, tapa: 'Dura', titulo: 'Oliver Twist', autor: 'Charles Dickens', genero: 'Drama', paginas: 500, stock: 180, precio: 3500,
        img: "Imagenes/OliverTwist.png"
    },

    {
        id: 11, tapa: 'Blanda', titulo: 'La Odisea', autor: 'Homero', genero: 'Poema Epico', paginas: 250, 
        stock: 80, precio: 1500, img: "Imagenes/LaOdisea.png"
    },

    {
        id: 12, tapa: 'Dura', titulo: 'Fausto', autor: 'Johann W. von Goethe', genero: 'Teatro', paginas: 504, stock: 100, precio: 3400,
        img: "Imagenes/Fausto.png"
    },

];


articulos.forEach((articulo) => {
    const idButton = `agregar-carrito${articulo.id}`
    document.getElementById("section-card").innerHTML +=

        `<div class="card h-100">
            <img class="card-img-top" src="${articulo.img}" alt="..." />
            <div class="card-body p-4">
            <div class="text-center cabecera-card">
                <h5 class="fw-bolder titulo">${articulo.titulo}</h5>
                ${articulo.autor}
            </div>

            <div class= "ficha">
                <p><br>${articulo.genero}<br>
                ${articulo.paginas} páginas</p>
            </div>

            <div class="text-center precio">
              $${articulo.precio}
            </div>

            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"> 
                 
                  <a class="btn btn-outline-dark mt-auto" id= "${idButton}"> <img class="carrito-icon"src="Imagenes/Cart.png" alt="carrito"></a>
                
                </div>
            </div>
        </div>
    </div>`;
});


articulos.forEach((articulo) => {

    const idButton = `agregar-carrito${articulo.id}`
    document.getElementById(idButton).addEventListener('click', () => {

        carrito.push(articulo);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, articulo) => acumulador + articulo.precio, 0);
        document.getElementById("total-carrito").innerHTML = `${carrito.length}  - $${total}`;
        document.getElementById("elementos-carrito").innerHTML = ""

        carrito.forEach ((articulo) => {

            document.getElementById("elementos-carrito").innerHTML += 
            
            `<tr>
                <th scope="row">${articulo.id}</th>
                <td><img src="${articulo.img}" style="width:75px"></td>
                <td>${articulo.titulo}</td>
                <td>$${articulo.precio}</td>
            </tr>`             
        })

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado al Carrtio',
            showConfirmButton: false,
            timer: 1000
        })
    })
});



document.getElementById("vaciar-carrito").addEventListener('click', () => {

    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Esta acción no se podrá revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Listo!',
            'El Carrito ha sido vaciado.',
            'success',
          )

          localStorage.clear()
                  
          location.reload()
        }
    })
})


fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data[1].casa.venta)
    })