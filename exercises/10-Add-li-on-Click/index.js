
document.getElementById("superDuperButton").addEventListener("click", function() {

	document.getElementById('myList').appendChild(document.createElement('li'));

	let ordinalNames = [ 'Primer', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto', 'Séptimo', 'Octavo', 'Noveno', 'Décimo', 'Undécimo', 'Duodécimo', 'Decimotercero', 'Decimocuarto', 'Decimoquinto', 'Decimosexto', 'Decimoséptimo', 'Decimoctavo', 'Decimonoveno', 'Vigésimo' ]; // Enumerar cada elemento <li> en la lista con nombres ordinales en español 
	let items = myList.querySelectorAll('li'); for (let i = 0; i < items.length; i++) { if 	(i < ordinalNames.length) { 
		items[i].innerHTML = ordinalNames[i] + ' elemento'; 
	} 
		else { 
			items[i].innerHTML = `${i + 1}º elemento`; 
		} 
	}

	
	
});
