function descuento(){

    let precio =
    parseFloat(document.getElementById("precio").value);

    let desc = precio * 0.20;

    let nuevoPrecio = precio - desc;

    let iva = nuevoPrecio * 0.15;

    let total = nuevoPrecio + iva;

    document.getElementById("resul").innerHTML =
    "Precio con descuento: $" + nuevoPrecio.toFixed(2);

    document.getElementById("total").innerHTML =
    "Precio final con IVA: $" + total.toFixed(2);
}