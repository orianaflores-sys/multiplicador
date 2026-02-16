function saludar(nombre, hora, genero) {
  let saludo;

  if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  let generoTexto = "";
  if (genero === "M") generoTexto = "Masculino";
  if (genero === "F") generoTexto = "Femenino";

  return saludo + ", " + nombre + " (" + generoTexto + ")";
}

export default saludar;
