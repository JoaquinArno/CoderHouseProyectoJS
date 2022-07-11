    
let nombre1 = prompt("Ingresar el nombre del jugador 1 (Blancas)")
let nombre2 = prompt("Ingresar el nombre del jugador 2 (Negras)")

const jugador1 = nombre1
const jugador2 = nombre2


if (nombre1 != "0") {

    console.log("Juega", jugador1)
    
}

let piezaB = prompt("Escriba la pieza a mover")
let posicionB = prompt("Escriba la posicion a mover la pieza")

console.log(piezaB + posicionB);


if (piezaB + posicionB != "0") {

    console.log("Juega", jugador2)

}

let piezaN = prompt("Escriba la pieza a mover")
let posicionN = prompt("Escriba la posicion a mover la pieza")

console.log(piezaN + posicionN);


function sugerencia () {

if (piezaN != "Caballo") {

   console.log("¡Defende tu peón! (Negras)")

}

else {

   console.log("Avanzá con peón a las posiciopnes defendidas por tu caballo")

}

}

sugerencia ()













