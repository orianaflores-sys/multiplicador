/*import saludar from "./saludar.js";

describe("Saludar", () => {
  it("deberia saludar", () => {
    expect(saludar()).toEqual("Hola");
  });
});*/
import saludar from "./saludar";

describe("Saludar", () => {
  it("deberia saludar con genero masculino", () => {
    expect(saludar("Pepe", 9, "M")).toEqual("Buenos días, Pepe (Masculino)");
  });

  it("deberia saludar con genero femenino", () => {
    expect(saludar("Ana", 15, "F")).toEqual("Buenas tardes, Ana (Femenino)");
  });
});


