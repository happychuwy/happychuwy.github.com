//console.log("hola desde js");
/*
//querySelector sólo trabaja con un elemento (el primero que encuentra)
let table = document.querySelector(".table");

let links=document.querySelectorAll("a");

links.forEach(function(link){
	console.log(link);
});

console.log(links);
*/
//console.log(table);

let celdas=document.querySelectorAll("td");
celdas.forEach(function(td)
{
	td.addEventListener("click",function()
	{
		console.log(this);
	});
});

let cerrar=document.querySelectorAll(".close");
cerrar.forEach(function(close)
{
	close.addEventListener("click", function(event)
	{
		event.preventDefault();

		let content=document.querySelector(".content");
		content.classList.remove("fadeInDown");
		content.classList.remove("animated");
		content.classList.add("fadeOutUp");
		content.classList.add("animated");

		setTimeout(function()
		{
			location.href="../";
		},600);
	});
});

/*
let iconos=document.querySelectorAll("i");
iconos.forEach(function(icono)
{
	icono.classList.remove("fa-star");
})
*/

