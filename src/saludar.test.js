/*import saludar from "./saludar.js";

describe("Saludar", () => {
  it("deberia saludar", () => {
    expect(saludar()).toEqual("Hola");
  });
});*/
import saludar from "./saludar";

describe("Saludar", () => {
  it("deberia usar Sr. si es masculino y edad > 30", () => {
    expect(saludar("Pepe", 9, "M", 35))
      .toEqual("Buenos días, Sr. Pepe");
  });

  it("deberia usar Sra. si es femenino y edad > 30", () => {
    expect(saludar("Ana", 15, "F", 31))
      .toEqual("Buenas tardes, Sra. Ana");
  });

  it("no deberia usar tratamiento si edad <= 30", () => {
    expect(saludar("Luis", 21, "M", 25))
      .toEqual("Buenas noches, Luis");
  });
});



