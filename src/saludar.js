function saludar(nombre, hora, genero, edad, idioma) {
  let saludo;
  let tratamiento = "";

  // SALUDO SEGUN IDIOMA Y HORA
  if (idioma === "EN") {
    if (hora < 12) saludo = "Good morning";
    else if (hora < 19) saludo = "Good afternoon";
    else saludo = "Good evening";
  } else {
    if (hora < 12) saludo = "Buenos días";
    else if (hora < 19) saludo = "Buenas tardes";
    else saludo = "Buenas noches";
  }

  // TRATAMIENTO SI EDAD > 30
  if (edad > 30) {
    if (idioma === "EN") {
      if (genero === "M") tratamiento = "Mr. ";
      if (genero === "F") tratamiento = "Mrs. ";
    } else {
      if (genero === "M") tratamiento = "Sr. ";
      if (genero === "F") tratamiento = "Sra. ";
    }
  }

  return saludo + ", " + tratamiento + nombre;
}

export default saludar;
