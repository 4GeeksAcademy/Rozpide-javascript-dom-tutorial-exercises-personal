let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
let dondeAñadoPaises = document.querySelector('#mySelect');
for (let i = 0; i<countries.length; i++){
    let option = document.createElement('option');
    option.value = countries[i];
    option.text = countries[i];

   dondeAñadoPaises.appendChild(option);
   
}
dondeAñadoPaises.addEventListener('change', function(){
    let selectCountry = dondeAñadoPaises.value;
    alert('has seleccionado '+ selectCountry)
})


// Your code here
