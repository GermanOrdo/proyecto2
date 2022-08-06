fetch("./data.json")
.then(response => response.json())
.then(destinos => {
    simulator(destinos);
})






