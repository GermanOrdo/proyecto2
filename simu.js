fetch("./data.json")
.then(response => response.json())
.then(destinos => {
    simulator (destinos)
});


let destinoElegido;
let pay;
const favourite = [];
function addFavourite(dt) {
    favourite.push(dt);
    localStorage.setItem('favoritos', JSON.stringify(favourite));
}
let destFav = document.getElementById("fav1");
function addDestiny(data) {
    let favDestino = JSON.parse(localStorage.getItem('favoritos'));
    for (const product of favDestino) {
        const lista = favDestino.map(product => {
            let fav = document.createElement("ol");
            destFav.innerHTML = "";
            fav.innerHTML = `<h2>${product.nombre}</h2>`;
            destFav.append(fav);

        });

    }
}

addDestiny();

function simulator(listaDestinos) {
    let travelForm = document.getElementById("formulario");
    travelForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let info = e.target;
        destinoElegido = (info.children[0].value).toLowerCase();
        const resultado = listaDestinos.find((el) => el.nombre === destinoElegido);
        let cuota = info.children[1].value;
        if (resultado === undefined || resultado === NaN || cuota === "Indique cantidad de cuotas") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Lo siento! no pudimos encontrar el destino elegido!',
                color: '#FF0000',
                background: '#FFCE30',
                timer: 2000,
            })
        } else {
            let boton = document.getElementById("boton");
            boton.addEventListener("click", () => {
                Swal.fire({
                    title: 'Genial!',
                    text: 'Encontramos tu destino.',
                    color: '#ffc107',
                    imageUrl: './img/avion.gif',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    background: '#6c757d',
                    timer: 5000
                })
            });
            addFavourite(resultado);
            addDestiny(resultado);
            totalPago = resultado.precio * 1.21;
            pay = (totalPago / cuota).toFixed(2);

            let consulta = document.getElementById("consulta");
            consulta.innerHTML = "";
            let resulDest = document.createElement("div");
            resulDest.innerHTML = `<h2 class= "consulta-titulo"> Tu destino es ${destinoElegido}</h2>
                                <p class= "consulta-cuerpo"> El monto a abonar es $${totalPago} mas impuestos, lo abonas en ${cuota} cuotas de $${pay}.</p>
                                <a href="./contacto.html"><input id="boton" class="btn btn-warning" type="submit" value="Mas Informacion"></a>`
                ;
            consulta.append(resulDest);
        }
    }

    );
}


