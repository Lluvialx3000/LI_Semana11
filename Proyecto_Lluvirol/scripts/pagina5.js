function cheque(){

    let dias =
    parseFloat(document.getElementById("dias").value);

    let hotel =
    parseFloat(document.getElementById("hotel").value);

    let comida =
    parseFloat(document.getElementById("comida").value);

    let gastoHotel = dias * hotel;

    let gastoComida = dias * comida;

    let otros = dias * 100;

    let total =
    gastoHotel + gastoComida + otros;

    document.getElementById("resul").innerHTML =
    "Total del cheque: $" + total.toFixed(2);
}