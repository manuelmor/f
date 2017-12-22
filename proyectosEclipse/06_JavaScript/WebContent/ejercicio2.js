function texto(){	
	var unidad=0;
	var precio=0;
	
	var unidad=parseFloat(document.getElementById("unidad").value);
	var precio=parseFloat(document.getElementById("precio").value);
	
	console.log(unidad);
	console.log(precio);
	
	var resultado=unidad*precio;
	console.log(resultado);
	
	window.alert("El precio total es " + resultado);
}