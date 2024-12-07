const btnCambio = document.getElementById('btn-cambio')
const texto = document.getElementById('texto');

btnCambio.addEventListener('click', () => {
  let ejecutado = false;
  if(!ejecutado){
    texto.innerText = "presionaste el boton"
    ejecutado = true;
  } else {
    texto.innerText = "hola"
    ejecutado = false;
  }
})

console.log("hola")