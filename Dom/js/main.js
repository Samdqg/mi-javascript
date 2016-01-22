
var model1= document.getElementById('model1')// devuelve el elemento que posea el id model1
model1.classList.add('is-azul');// al elemento model1 le agrega la clase is-azul -- no se debe colocar el punto de las clases

var model2= document.querySelector(".model--2"); 
// Devuelve el primer elemento dentro del dom que posea la clase model--2
//querySelector()y querySelectorAll() permite buscar un elemento por tag, id, or clase
model2.classList.add('is-expandible');

var todos= document.querySelectorAll(".model");
// a diferencia del  querySelector() este de vuelve un arreglo de los objectos que posean la clase model
//todos.classList.add('is-expandible'); esto no es posible dado que querySelectorAll() devuelve un arreglo


function $(selector){
    return document.querySelector(selector);
}

//esta funcion imita el comportamiento del selector de jquery implementado por algunos programadores

var model3= $("#model3");
model3.classList.add('is-negro');

model1.addEventListener('click',mialert);
function mialert() {
  alert('hola mundo');
}
model2.addEventListener('click',minimizar);
function minimizar() {
  model2.classList.remove('is-expandible');

}
model3.addEventListener('click',function(){
  model3.classList.add('is-expandible');
    
});

console.log(model1);
console.log(model2);
console.log(model3);
console.log(todos);