import saludar from "./saludar.js";

describe("Saludar", () => {
  it("deberia saludar", () => {
    expect(saludar()).toEqual("Hola");
  });
});
