
class Destinos {
    constructor(name, precio) {
        this.name = name;
        this.precio = precio;
        this.vendido = false;
    }
    vender() {
        this.vendido = true;
    }
}

const listaDestinos = [];
listaDestinos.push(new Destinos("malasia", 1000));
listaDestinos.push(new Destinos("everest", 2000));
listaDestinos.push(new Destinos("egipto", 3000));
listaDestinos.push(new Destinos("niza", 3500));
listaDestinos.push(new Destinos("malaga", 2500));
console.log(listaDestinos);
localStorage.setItem("destinos", JSON.stringify(listaDestinos));

