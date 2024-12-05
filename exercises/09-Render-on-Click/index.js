let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	let nuevoDiv = document.createElement('div');
	nuevoDiv.style.backgroundColor='yellow';
	nuevoDiv.innerHTML='Hello World';
	document.body.appendChild(nuevoDiv)
	// Your code here	
});
