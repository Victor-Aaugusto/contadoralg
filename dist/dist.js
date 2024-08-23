"use strict";

function typeWrite(elemento) {
  var textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
var titulo = document.querySelector('.text-welcome');
typeWrite(titulo);
