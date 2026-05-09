function area(){

    let lado =
    parseFloat(document.getElementById("lado").value);

    let area = lado * lado;

    document.getElementById("resul").innerHTML =
    "Área: " + area.toFixed(2);
}