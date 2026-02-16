/*import saludar from "./saludar.js";

describe("Saludar", () => {
  it("deberia saludar", () => {
    expect(saludar()).toEqual("Hola");
  });
});*/
import saludar from "./saludar";

describe("Saludar", () => {
  it("deberia saludar en ingles en la mañana", () => {
  expect(saludar("Pepe", 9, "M", 35, "EN"))
    .toEqual("Good morning, Mr. Pepe");
});

it("deberia saludar en ingles en la tarde", () => {
  expect(saludar("Ana", 15, "F", 31, "EN"))
    .toEqual("Good afternoon, Mrs. Ana");
});

it("deberia saludar en ingles en la noche", () => {
  expect(saludar("Luis", 21, "M", 25, "EN"))
    .toEqual("Good evening, Luis");
});
});



