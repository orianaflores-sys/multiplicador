/*import saludar from "./saludar.js";

describe("Saludar", () => {
  it("deberia saludar", () => {
    expect(saludar()).toEqual("Hola");
  });
});*/
import saludar from "./saludar";

expect(saludar("Pepe", 9, "M", 35))
  .toEqual("Buenos días, Sr. Pepe");

expect(saludar("Ana", 15, "F", 31))
  .toEqual("Buenas tardes, Sra. Ana");

expect(saludar("Luis", 21, "M", 25))
  .toEqual("Buenas noches, Luis");



