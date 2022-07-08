const fnValidar01 = () => {
    let xTexto = document.getElementById("txtTexto").value;
    if(xTexto=="" || /^\s+$/.test(xTexto)){
        alert("Falta TEXTO...");
        return false;
	}

    let xNumero = document.getElementById("txtNumero").value;
    if(xNumero=="") {
        alert("falta NUMERO...");
        return false;
    }

    /// Caso contrario ///
    return true;
}