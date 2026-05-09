function ahorro(){

    let sueldo =
    parseFloat(document.getElementById("sueldo").value);

    let semanal = sueldo * 0.15;

    let anual = semanal * 4 * 12;

    document.getElementById("resul").innerHTML =
    "Ahorro semanal: $" + semanal.toFixed(2);

    document.getElementById("total").innerHTML =
    "Ahorro anual: $" + anual.toFixed(2);
}