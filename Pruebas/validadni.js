function f() {
    var dni = document.getElementById("dni").value
    if(dni.length == 9) {
        var numeros = dni.substring(0, 8)
        var letra = dni.substring(8, 9)
        if(validar(numeros, letra) && !isNaN(numeros)) {
            alert("¡Tu DNI es válido!")
        }
        else {
            alert("Introduce un DNI con 8 números y una letra, por favor")
        }
    } else {
        alert("Introduce un DNI con 8 números y una letra, por favor")
    }
}

function validar(y, z) {
    letras = "TRWAGMYFPDXBNJZSQVHLCKET"
    return (z == letras[y % 23])
}