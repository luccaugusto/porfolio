function  mudaVisu() {
	var grid = document.getElementById("grid");
	var lista = document.getElementById("lista");

	if (grid.style.display === 'none') {
		grid.style.display = 'block';
		lista.style.display = 'none';
	}else{
		grid.style.display = 'none';
		lista.style.display = 'block';
	}
}
