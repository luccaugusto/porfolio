function  toggle_menu() {
	var menu = document.getElementById("menu-container");

  menu.classList.toggle("menu-container-open");
	if (menu.style.display !== 'block') {
		/* menu.style.display = 'block';
    menu.style.opacity = 1; */
	}else{
		/* menu.style.display = 'none';
    menu.style.opacity = 0; */
	}
}
