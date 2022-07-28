let destinoElegido;
let pay;

let travelForm = document.getElementById("formulario");
travelForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let info = e.target;
    destinoElegido = (info.children[0].value).toLowerCase();
    const resultado = listaDestinos.find((el) => el.name === destinoElegido);
    localStorage.setItem("favoritos", JSON.stringify(resultado));
    let cuota = info.children[1].value;
    totalPago = resultado.precio * 1.21;
    pay = (totalPago / cuota).toFixed(2);
    console.log(pay);

    let consulta = document.getElementById("consulta");
    let resulDest = document.createElement("div");
    resulDest.innerHTML = `<h2> Tu destino es ${destinoElegido}</h2>
                                <p> El monto a abonar es $${totalPago} mas impuestos, lo abonas en ${cuota} cuotas de $${pay}. `;
    consulta.append(resulDest);
});
const favDestino = JSON.parse(localStorage.getItem('favoritos')) || [];
console.log(favDestino);


let destFav = document.getElementById("fav1")
let fav = document.createElement("ul");
fav.innerHTML = favDestino.name.toUpperCase();
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
