
let formConsult = document.getElementById("formConsulta")
formConsult.addEventListener("submit", (e) => {
    e.preventDefault();
    let info = e.target;
    console.log(typeof(info.children[1].value));
    console.log(info.children[1].value);
    if (info.children[1].value === "" || info.children[3].value === "" || info.children[5].value === ""|| info.children[7].value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal, revisa los datos',
            footer: 'Intentalo nuevamente'
        })
    } else {
        Swal.fire({
            title: 'Seguro que quieres enviar la consulta?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            denyButtonText: `No Enviar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Enviado!', 'Un agente se comunicara con vos a la brevedad', 'success')
            } else if (result.isDenied) {
                Swal.fire('La consulta no se enviara!', '', 'info')
            }
        })
    }
});
