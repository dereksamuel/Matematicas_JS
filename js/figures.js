let selectChange = document.getElementById("metrics");
const metrics = {
  cm: () => 1,
  mm: () => 10 * metrics.cm(),
};

// SQUARE

const squareSides = [5, 5, 5, 5];
const squarePerimeter = (side = 0) => {
  return (side || squareSides[0]) * squareSides.length * metrics[selectChange.value]();
}
const squareArea = (side) => {
  return (side || squareSides[0]) ** 2 * metrics[selectChange.value]();
}

// TRIANGULE

const trianguleSides = {
  side1: 6 * metrics[selectChange.value](),
  side2: 6 * metrics[selectChange.value](),
  base: 4 * metrics[selectChange.value](),
};
const trianguleHeightRaiz = (trianguleSides.side1 ** 2) - (trianguleSides.base / 2 ** 2);
const trianguleHeight = Math.sqrt(trianguleHeightRaiz);

const triangulePerimeter = (side1 = 6, side2 = 6, base = 4) => {
  return side1 * metrics[selectChange.value]() + side2 * metrics[selectChange.value]() + base * metrics[selectChange.value]();
};
const trianguleArea = (base) => {
  return base * trianguleHeight / 2;
};

// CIRCLES

const circleRadius = 4 * metrics[selectChange.value]();
const circleDiameter = (radius = 4) => (radius * metrics[selectChange.value]()) * 2;

const circlePerimeter = (radius) => circleDiameter(radius) * Math.PI;
const circleArea = (radius = 4) => (radius ** 2) * Math.PI;

function calculatePerimeterSquare() {
  const $sideSquare = document.getElementById("sideSquare")?.value;
  const $figure = document.querySelector("#Square");
  const perimeter = squarePerimeter($sideSquare);
  const pharragraphs = document.getElementById("result");
  const pharragraphsArea = document.getElementById("resultArea");
  const pharragraph = document.createElement("p");
  const $card = document.querySelector("#Square_card");

  if (pharragraphs) {
    $card.removeChild(pharragraphs);
    pharragraphsArea ? $card.removeChild(pharragraphsArea) : null;
  }

  pharragraph.id = "result";
  pharragraph.textContent = "Perimeter: " + perimeter + selectChange.value;
  $card.appendChild(pharragraph);
  $figure.setAttribute("style", `width: ${perimeter}px; height: ${perimeter}px;`);
}

function calculateAreaSquare() {
  const $sideSquare = document.getElementById("sideSquare")?.value;
  const $card = document.querySelector("#Square_card");
  const area = squareArea($sideSquare);
  const pharragraphs = document.getElementById("resultArea");
  const pharragraph = document.createElement("p");

  if (pharragraphs) $card.removeChild(pharragraphs);

  pharragraph.id = "resultArea";
  pharragraph.textContent = "Area: " + area + selectChange.value;
  $card.appendChild(pharragraph);
}

function calculatePerimeterTriangule() {
  const $sideTriangule = document.getElementById("sideTriangule")?.value;
  const $sideTriangule2 = document.getElementById("sideTriangule2")?.value;
  const $baseTriangule = document.getElementById("baseTriangule")?.value;

  const $figure = document.querySelector("#Triangule");
  const $card = document.querySelector("#Triangule_card");
  const perimeter = triangulePerimeter($baseTriangule);
  const pharragraphs = document.getElementById("resultTriangule");
  const pharragraph = document.createElement("p");

  if (pharragraphs) {
    $card.removeChild(pharragraphs);
  }

  const real$sideTriangule = ($sideTriangule / 16) * 100;
  const real$sideTriangule2 = ($sideTriangule2 / 16) * 100;
  pharragraph.id = "resultTriangule";
  pharragraph.textContent = "Perimeter: " + perimeter + selectChange.value;
  $card.appendChild(pharragraph);
  $figure.setAttribute("style", `
    width: ${perimeter}px; height: ${perimeter}px;
    clip-path: polygon(${real$sideTriangule}% ${real$sideTriangule2}%, 0 100%, 100% 100%);
  `);
}

function calculateAreaTriangule() {
  const $baseTriangule = document.getElementById("baseTriangule")?.value;

  // const $figure = document.querySelector("#Triangule");
  const $card = document.querySelector("#Triangule_card");
  const area = trianguleArea($baseTriangule);
  const pharragraphs = document.getElementById("resultAreaT");
  const pharragraph = document.createElement("p");

  if (pharragraphs && pharragraphs.textContent) {
    $card.removeChild(pharragraphs);
  }

  pharragraph.id = "resultAreaT";
  pharragraph.textContent = "Area: " + area + selectChange.value;
  $card.appendChild(pharragraph);
}

function calculatePerimeterCircle() {
  const $sideCircle = document.getElementById("sideCircle")?.value;

  const $figure = document.querySelector("#Circle");
  const $card = document.querySelector("#Circle_card");
  const perimeter = circlePerimeter($sideCircle);
  const pharragraphs = document.getElementById("resultCircle");
  const pharragraphsArea = document.getElementById("resultAreaT");
  const pharragraph = document.createElement("p");

  if (pharragraphs && pharragraphs.textContent) {
    $card.removeChild(pharragraphs);
  }

  pharragraph.id = "resultCircle";
  pharragraph.textContent = "Perimeter: " + perimeter + selectChange.value;
  $card.appendChild(pharragraph);
  $figure.setAttribute("style", `
    width: ${perimeter}px; height: ${perimeter}px;
  `);
}

function calculateAreaCircle() {
  const $sideCircle = document.getElementById("sideCircle")?.value;

  // const $figure = document.querySelector("#Circle");
  const $card = document.querySelector("#Circle_card");
  const area = circleArea($sideCircle);
  const pharragraphs = document.getElementById("resultAreaC");
  const pharragraph = document.createElement("p");

  if (pharragraphs && pharragraphs.textContent) {
    $card.removeChild(pharragraphs);
  }

  pharragraph.id = "resultAreaC";
  pharragraph.textContent = "Area: " + area + selectChange.value;
  $card.appendChild(pharragraph);
}

function handlerChangeOption(e) {
  selectChange = e;
}

// EXERCISE TEST 2

function calcHeightTriangleIsc(
  sidea,
  sideb,
  sidec,
) {
  const result = (sidea + sideb + sidec) / 3;
  if (result !== sidea) throw new Error("Los lados deben ser iguales");
  const divisibleTriangule = sidea ** 2;
  const exponencialA = (sidea / 2) ** 2;

  return Math.sqrt(divisibleTriangule - exponencialA);
}
