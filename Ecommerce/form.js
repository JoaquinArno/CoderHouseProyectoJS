
document.getElementById("enviar-pedido").addEventListener('click', () => {

    localStorage.clear()

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Pedido Enviado!',
        text: 'Te enviaremos un E-mail con toda la información sobre cómo proseguir ¡Muchas gracias por tu compra!',
        showConfirmButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = "index.html";
        }

    })    
})
