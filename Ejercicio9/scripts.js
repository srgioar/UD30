
	function chequearMayusMinus(){
		
		var cadena = prompt("Introduce cadena");
		
		//var cadena = "HoLaTiO";
		var tieneMinus = false;
		var tieneMayus = false;
		
		for (var i = 0; i < cadena.length; i++){
			if (cadena[i] == cadena[i].toUpperCase) {
				tieneMayus = true;
			}
			
			if (cadena[i] == cadena[i].toLowerCase){
				tieneMinus = true;
			}
		}
		
		if (!tieneMinus){
			alert("Todo mayus");
			console.log("Todo mayus");
		}
		
		if (!tieneMayus){
			alert("Todo minus");
			console.log("Todo minus");
		}
		
		if (tieneMayus && tieneMinus){
			alert("Combina ambas");
			console.log("Combina ambas");
		}
	
	}
	
	chequearMayusMinus();