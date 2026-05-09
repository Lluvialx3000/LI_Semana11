function promedio(){

    let e1 =
    parseFloat(document.getElementById("e1").value);

    let e2 =
    parseFloat(document.getElementById("e2").value);

    let e3 =
    parseFloat(document.getElementById("e3").value);

    let final =
    (e1 * 0.25) +
    (e2 * 0.25) +
    (e3 * 0.50);

    document.getElementById("resul").innerHTML =
    "Promedio final: " + final.toFixed(2);
}