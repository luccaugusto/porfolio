function  toggle_menu() {
	var menu = document.getElementById("menu-container");

  menu.classList.toggle("menu-container-open");
}

function expandir() {
	var extra_bio = document.getElementById("mais-bio");
  extra_bio.classList.toggle("hidden");
  var mostrar_mais = document.getElementById("mostrar-mais");
  if (mostrar_mais.innerText === "...Ler menos")
    mostrar_mais.innerText = "...Ler mais";
  else
    mostrar_mais.innerText = "...Ler menos";
}
