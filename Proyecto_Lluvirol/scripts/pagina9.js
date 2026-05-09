function tiempo(){

    let edad =
    parseFloat(document.getElementById("edad").value);

    let meses = edad * 12;
    let semanas = edad * 52;
    let dias = edad * 365;
    let horas = dias * 24;

    document.getElementById("resul").innerHTML =
    `
    Meses: ${meses}<br>
    Semanas: ${semanas}<br>
    Días: ${dias}<br>
    Horas: ${horas}
    `;
}