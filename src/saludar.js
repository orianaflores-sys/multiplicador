function saludar(nombre, hora, genero, edad) {
  let saludo;

  if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 19) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  let tratamiento = "";

  if (edad > 30) {
    if (genero === "M") tratamiento = "Sr. ";
    if (genero === "F") tratamiento = "Sra. ";
  }

  return saludo + ", " + tratamiento + nombre;
}

export default saludar;
