// Your code here
let elem = document.querySelector('body');
    elem.innerHTML = `<img class='image' src="https://via.placeholder.com/350x150" />
    <button id="changeColorButton">Pasa el mouse por aqui</button>`;
let imagen= document.querySelector('.image');
    imagen.addEventListener('mouseover', function (){imagen.style.border = '5px solid red'});
    imagen.addEventListener('mouseout', function (){imagen.style.border = 'aqua'});
let button = document.querySelector('#changeColorButton');
    button.addEventListener('mouseover', function (){button.style.backgroundColor = 'red'});
    button.addEventListener('mouseout', function (){button.style.backgroundColor = ''});
button.style.display = 'block';
button.style.marginTop = '10px';
button.style.width = '350px';
