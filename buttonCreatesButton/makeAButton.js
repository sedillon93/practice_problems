'use strict';

let buttonText = 'make a new button';
var button = document.createElement('button');
button.innerHTML = buttonText;
document.body.appendChild(button);

button.addEventListener('click', makeNewButton);

function makeNewButton(event){
  event.preventDefault();
  let newButton = document.createElement('button');
  newButton.innerHTML = 'I am a new button';
  document.body.appendChild(newButton);
}
