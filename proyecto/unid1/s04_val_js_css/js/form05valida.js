const fnValidar05 = () => {

    var xTexto = Document.getElementById("txtTexto").value;
    if(!(/^\d{3}\s\d{3}\s\d{3}$/.test(xTexto))) { 
        alert("Escriba 9 números agrupados entre 3 y separados por un espacio...");
        return false;
    }

    var xNumero = document.getElementById("txtNumero"). value;
    if(!(/^\d{9}$/.test(xNumero))) {
        alert("Falta NÚMEROS...");
        return false; 
    }

    var xFijo = document.getElementById("txtFijo").value;
    if(!(/^05[45]\s\{6}$/.test(xFijo))) {
        alert("NÚMERO de teléfono fijo...");
        return false; 
    }

    ///caso contrario///
    return true;
} 