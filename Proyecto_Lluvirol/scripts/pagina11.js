function hotel(){

    let dias =
    parseFloat(
        document.getElementById("dias").value
    );

    let costo =
    parseFloat(
        document.getElementById("costo").value
    );

    let total = dias * costo;

    document.getElementById("resul").innerHTML =
    "Total a pagar: $" + total.toFixed(2);

}