let destinoElegido;
let pay;
function simulator(listaDestinos) {
    let travelForm = document.getElementById("formulario");
    travelForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let info = e.target;
        destinoElegido = (info.children[0].value).toLowerCase();
        console.log(listaDestinos);
        const resultado = listaDestinos.find((el) => el.nombre === destinoElegido);
        console.log(resultado);
        console.log(listaDestinos);
        let cuota = info.children[1].value;
        if (resultado === undefined || resultado === NaN || cuota === "Indique cantidad de cuotas") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Lo siento! algun campo quedo sin rellenar!',
                background: '#6c757d',
                timer: 2000,
            })
        } else {
            localStorage.setItem("favoritos", JSON.stringify(resultado));
            totalPago = resultado.precio * 1.21;
            pay = (totalPago / cuota).toFixed(2);
            console.log(pay);

            let consulta = document.getElementById("consulta");
            consulta.innerHTML = "";
            let resulDest = document.createElement("div");
            resulDest.innerHTML = `<h2> Tu destino es ${destinoElegido}</h2>
                                <p> El monto a abonar es $${totalPago} mas impuestos, lo abonas en ${cuota} cuotas de $${pay}. `;
            consulta.append(resulDest);
        }
    }

    );
}

const favDestino = JSON.parse(localStorage.getItem('favoritos')) || [];
console.log(favDestino);


let destFav = document.getElementById("fav1")
let fav = document.createElement("ul");
fav.innerHTML = favDestino.nombre.toUpperCase();
destFav.append(fav);
let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    Swal.fire({
        title: 'Genial!',
        text: 'Encontramos tu destino.',
        color: '#ffc107',
        imageUrl: './img/4.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        background: '#6c757d',
        timer: 2000
    })
});
