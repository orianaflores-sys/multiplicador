/*import saludar from "./saludar.js";

describe("Saludar", () => {
  it("deberia saludar", () => {
    expect(saludar()).toEqual("Hola");
  });
});*/
import saludar from "./saludar";

describe("Saludar", () => {
  it("deberia saludar con nombre", () => {
    expect(saludar("Pepe")).toEqual("Hola, Pepe");
  });
});

