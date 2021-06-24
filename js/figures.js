const selectChange = { value: "cm", }; //FIXME
const metrics = {
  cm: () => 10 * 1,
  mm: () => 10 * metrics.cm(),
};

// SQUARE
const squareSides = [5, 5, 5, 5];
const squarePerimeter = squareSides[0] * squareSides.length * metrics[selectChange.value]();
const squareArea = squareSides[0] ** 2 * metrics[selectChange.value]();

// TRIANGULE
const trianguleSides = {
  side1: 6,
  side2: 6,
  base: 4,
};
const trianguleHeightRaiz = (trianguleSides.side1 ** 2) - (trianguleSides.base / 2 ** 2);
const trianguleHeight = Math.sqrt(trianguleHeightRaiz);

const triangulePerimeter = trianguleSides.side1 + trianguleSides.side2 + trianguleSides.base;
const trianguleArea = trianguleSides.base * trianguleHeight / 2;

// CIRCLES
const circleRadius = 4;
const circleDiameter = circleRadius * 2;

const circlePerimeter = circleDiameter * Math.PI;
const circleArea = (circleRadius ** 2) * Math.PI;

console.log(circleArea, Math.PI);
