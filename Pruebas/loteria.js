function checkFields() {
    var casillas = document.forms[0].elements.length
    var seleccionadas = ""
    var contador = 0;
    for(var i = 0; i < casillas; i++) {
        if(document.forms[0].elements[i].checked) {
            contador ++
            seleccionadas += i + " "
        }
    }
    if(contador == 6) {
        alert(contador + " numeros marcados\n"
        + seleccionadas)
        return true
    } else {
        alert(contador + " numeros marcados\n(deberían ser 6)\n"
        + seleccionadas)
    }
    return false
}
alert("Juguemos a la lotería")