function luz(){

    let kw =
    parseFloat(document.getElementById("kw").value);

    let costo =
    parseFloat(document.getElementById("costo").value);

    let total = kw * costo;

    document.getElementById("resul").innerHTML =
    "Pago total: $" + total.toFixed(2);
}