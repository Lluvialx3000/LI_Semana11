function potencia(){

    let r =
    parseFloat(document.getElementById("resistencia").value);

    let i =
    parseFloat(document.getElementById("corriente").value);

    let p = r * (i * i);

    document.getElementById("resul").innerHTML =
    "Potencia eléctrica: " + p.toFixed(2);
}