var inputs = document.getElementById('input');
var icon = document.querySelector('#icon');
var love = document.getElementById('love')
var button = document.querySelector('#button');

button.addEventListener('click',function(){
    varman();
})

function varman(){
    const letter = 
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    var passwordalavu = 8;
for(let index = 0; index < passwordalavu; index++ ){
    var random = Math.floor(Math.random() * letter.length);
  password += letter.substring(random , random + 1)

}
inputs.value = password;
}
icon.addEventListener('click',function(){
    vijay();
})
function vijay(){
   inputs.select();
   inputs.setSelectionRange(0,9999);
navigator.clipboard.writeText(inputs.value)
}