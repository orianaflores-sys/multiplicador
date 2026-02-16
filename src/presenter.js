// import sumar from "./sumador";
// import multiplicar from "./multiplicador";
import saludar from "./saludar";

// const first = document.querySelector("#primer-numero");
// const second = document.querySelector("#segundo-numero");
// const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
// const mulButton = document.querySelector("#multiplicar-button");

/*
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

mulButton.addEventListener("click", () => {
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
*/

const saludarButton = document.querySelector("#saludar-button");
const nombreInput = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const idiomaSelect = document.querySelector("#idioma");


saludarButton.addEventListener("click", () => {
  const nombre = nombreInput.value;
  const genero = generoSelect.value;
  const edad = Number.parseInt(edadInput.value);

  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();

  const idioma = idiomaSelect.value;

div.innerHTML =
  "<p>" + saludar(nombre, horaActual, genero, edad, idioma) + "</p>";

});
