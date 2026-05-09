function agua(){

    let metros =
    parseFloat(document.getElementById("metros").value);

    let costo =
    parseFloat(document.getElementById("costo").value);

    let total = metros * costo;

    document.getElementById("resul").innerHTML =
    "Total a pagar: $" + total.toFixed(2);
}