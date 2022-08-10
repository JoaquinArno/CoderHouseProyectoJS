const articulosCarrito = JSON.parse(localStorage.getItem("carrito")) ?? [];

const carrito = articulosCarrito;

const total = carrito.reduce ((acumulador, articulo) => acumulador + articulo.precio, 0);

document.getElementById("total-carrito").innerHTML = `${carrito.length}  - $${total}`;

const articulos = [

 {id:1, tapa:'Dura', titulo:'El Señor de los Anillos', autor:'J. R. R. Tolkien', genero:'Fantasía', paginas:1200, stock:150, precio:4500, 
 img:"https://infoliteraria.com/wp-content/uploads/2022/04/El-senor-de-los-anillos-ilustrado-683x1024.jpg.webp"},

 {id:2, tapa:'Blanda', titulo:'1984', autor:'George Orwell', genero:'Ciencia ficcon', paginas:320, stock:100, precio:2700, 
 img:"https://images.cdn1.buscalibre.com/fit-in/360x360/10/42/10426f9e9ae4f7cd9eb5d33cef5aa143.jpg"},

 {id:3, tapa:'Blanda', titulo:'Farenheit 451', autor:'Ray Bradbury', genero:'Ciencia ficcon', paginas:280, stock:120, precio:3000, 
 img:"https://images.cdn1.buscalibre.com/fit-in/360x360/bd/92/bd920ce8ea72090a6277dc9ee4c87ea5.jpg"},

 {id:4, tapa:'Dura', titulo:'Oliver Twist', autor:'Charles Dickens', genero:'Drama', paginas:500, stock:180, precio:3500, 
 img:"https://resumen.club/wp-content/uploads/2019/05/oliver-twist-700x1150.jpg"},

 {id:5, tapa:'Blanda', titulo:'Demian', autor:'Herman Hesse', genero:'Novela filosófica', paginas:200, stock:200, precio:2500, 
 img:"https://images-na.ssl-images-amazon.com/images/I/81P8IMpd7PL.jpg"},

 {id:6, tapa:'Blanda', titulo:'Macbeth', autor:'William Shakespeare', genero:'Tragedia', paginas:130, stock:90, precio:3600, 
 img:"https://idunneditorial.com/wp-content/uploads/2016/09/Mcbeth.jpg"},
 
 {id:7, tapa:'Blanda', titulo:'Hambre', autor:'Knut Hamsun', genero:'Drama', paginas:150, stock:300, precio:3000, 
 img:"https://quelibroleo.com/images/libros/libro_1323534889.jpg"},

 {id:8, tapa:'Dura', titulo:'La Divina Comedia', autor:'Dante Alighieri', genero:'Epopeya', paginas:322, stock:150, precio:2900, 
 img:"https://images.cdn3.buscalibre.com/fit-in/360x360/0b/7a/0b7a0edcdb38d4fe128b379368d1abe4.jpg"},

];


articulos.forEach((articulo) => {
    const idButton = `agregar-carrito${articulo.id}`
    document.getElementById("section-card").innerHTML += 
    
    `<div class="card h-100">
            <img class="card-img-top" src="${articulo.img}" alt="..." />
            <div class="card-body p-4">
            <div class="text-center cabecera-card">
                <h5 class="fw-bolder">${articulo.titulo}</h5>
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
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" id= "${idButton}">Añadir al carrito</a></div>
            </div>
        </div>
    </div>`;
});

articulos.forEach((articulo) => {

    const idButton = `agregar-carrito${articulo.id}`
    document.getElementById(idButton).addEventListener('click', () => {

    carrito.push(articulo);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    const total = carrito.reduce ((acumulador, articulo) => acumulador + articulo.precio, 0);
    document.getElementById("total-carrito").innerHTML = `${carrito.length}  - $${total}`;

    })
});


