function ingresoNombre() {

    let usuario = prompt ('Ingresa tu nombre y apellido')

    if (usuario >= 0) {

        alert ('Ingresa un nombre valido.')
        
    }

    else {

        alert ('Has ingresado como ' + usuario + '.')
       
    }

}

ingresoNombre();



function Libro(tapa, titulo, autor, genero, paginas, stock, precio) {

    this.tapa = tapa;
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.paginas = paginas;
    this.stock = stock;
    this. precio = precio;

}

const libro1 = new Libro('Dura','El Señor de los Anillos', 'Tolkien', 'Fantasía', 1200, 150, 4500);
const libro2 = new Libro('Blanda','1984', 'Orwell', 'Ciencia ficcon', 320, 100, 2700);
const libro3 = new Libro('Blanda','Farenheit 451', 'Bradbury', 'Ciencia ficcon', 280, 120, 3000);
const libro4 = new Libro('Dura','Oliver Twist', 'Dickens', 'Drama', 500, 180, 3500);
const libro5 = new Libro('Blanda','Demian', 'Hesse', 'Novela filosofica', 200, 200, 2500);
const libro6 = new Libro('Dura','Macbeth', 'Shakespeare', 'Tragedia', 130, 90, 3600);

const carrito = [];

function agregarProducto(producto) {

    carrito.push(producto);
    console.log(carrito);

}

agregarProducto(libro1)
agregarProducto(libro2)
agregarProducto(libro3)
agregarProducto(libro4)
agregarProducto(libro5)
agregarProducto(libro6)



const resultado = carrito.find((el) => el.titulo === "Farenheit 451")
const resultado2 = carrito.filter((el) => el.stock >= 120)

console.log(resultado)
console.log(resultado2)