function buscar() {
    const ml = 0.035
    let peso = Number(document.getElementById("peso").value);
    let litros = (ml * peso).toFixed(3);
    
    document.getElementById("litros").value = (litros + " Litros" );
}
function limpar() {
    document.getElementById("formulario").reset();
}