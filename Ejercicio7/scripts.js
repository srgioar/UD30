
	function calcularFactorial(num){
		
		var factorial = 1;
		
		for (var i = num; i > 2; i--){
			factorial += factorial * i;
		}

		alert("El factorial de " + num + " es: " + factorial);
	}
	
	calcularFactorial(5);