const fnValidar02 = () => {

	let xtexto= document.getElementById("txtTexto").value;
    
    let elementoGenero = document.getElementsByName("radGenero");
	let valorElegidoGenero = "";
	let eligioGenero = false;
	for(let i=0; i<elementoGenero.length; i++) {
		if(elementoGenero[i].checked) {
			valorElegidoGenero = elementoGenero[i].value;
			eligioGenero = true;
		}
	}
    var checkbox = document.getElementsByName("cckPref");
	var contar = 0;
	for(var i=0; i< checkbox.length; i++) {
		if(checkbox[i].checked)
			contar++
	}
    let elementoPref = document.getElementsByName("cckPref");
	let valorElegidoPref = "";
	let eligioPref = false;
	for(let i=0; i<3; i++) {
		if(elementoPref[i].checked) {
			valorElegidoPref = elementoPref[i].value;
			eligioPref = true;
		}
	}

    if(xtexto==""|| /^\s+$/.test(xtexto)) {
        alert("Falta ESCRIBIR SU NOMBRE...");
        return false;
    }
	
	if (!eligioGenero){
		alert("Elija un Género...");
		return false;
	}else{
		alert("Su género es " + valorElegidoGenero);
	}
    
	
	
	if(contar <2){
        alert("Obligatorio dos check!");
        return false;
    }
    if(contar > 2){
        alert("Obligatorio sólo dos check");
        return false;
    }
    if (!eligioPref){
		alert("Elija UNA PREFERENCIA...");
		return false;
	}
	else{
		alert("Su preferencia elegida es " + valorElegidoPref);
	}
	///Caso contrario///
	return true;
}