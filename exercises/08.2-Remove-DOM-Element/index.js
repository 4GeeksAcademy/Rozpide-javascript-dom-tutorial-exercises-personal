// Your code here
// Seleccionar la lista con el ID parentLi 
let parentLi = document.querySelector('#parentLi'); 
// Obtener todos los nodos hijos 
let children = parentLi.children; 
// Mostrar los nodos en la consola 
console.log(children); 
// Eliminar el segundo <li> (en childNodes, los nodos de texto cuentan) 
parentLi.removeChild(children[1])