const enlaces = document.querySelectorAll('ul li a');
const boton = document.querySelector('.btnMenu');
const menu = document.querySelector('.navegador');
let on_off = true;

enlaces.forEach((link) => {

	var links = link.innerText;
	link.dataset.text = links;

	link.addEventListener('mouseover', () =>{
		menu.style.background = "none";
	});

	link.addEventListener('mouseout', () =>{
		menu.style.background = "white";
	});

});


boton.addEventListener('click', () => {

	if(on_off){
		menu.style.left = "0";
		menu.style.transition = '300ms'

		on_off = false;
	}else{
		on_off = false;

		menu.style.left = "-100%";
		menu.style.transition = '300ms'

		on_off = true;
	}
});