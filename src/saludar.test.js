/*import saludar from "./saludar.js";

describe("Saludar", () => {
  it("deberia saludar", () => {
    expect(saludar()).toEqual("Hola");
  });
});*/
import saludar from "./saludar";

describe("Saludar", () => {
  it("deberia saludar con buenos dias si es en la mañana", () => {
    expect(saludar("Pepe", 9)).toEqual("Buenos días, Pepe");
  });

  it("deberia saludar con buenas tardes si es en la tarde", () => {
    expect(saludar("Pepe", 15)).toEqual("Buenas tardes, Pepe");
  });

  it("deberia saludar con buenas noches si es en la noche", () => {
    expect(saludar("Pepe", 21)).toEqual("Buenas noches, Pepe");
  });
});


