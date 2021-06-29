let countries = [];
const URL = "https://restcountries.eu/rest/v2/all";

window.onload = () => {
  fetchApi();
};

async function fetchApi() {
  response = await (await fetch(URL)).json();
  countries = response;
  clearCountries();
}

function isEven(number) {
  return Boolean(number % 2 === 0);
}

function calcMediaAritmetica(list = []) {
  const plusList = list.reduce((accum, item) => accum + +item, 0);
  return plusList / list.length;
}

function clearCountries() {
  const countriesSalary = countries.map((country) => {
    return country.population;
  });

  const salariesSortered = countriesSalary.sort((salaryA, salaryB) => {
    return salaryB.population - salaryA.population;
  });

  const medianGeneral =  calcMedianCountry(salariesSortered);
  const spliceStart = (salariesSortered.length * (100 - 10)) / 100;
  const spliceCount = salariesSortered.length - spliceStart;
  const medianTop10 = calcMedianCountry(salariesSortered.splice(spliceStart, spliceCount));

  console.log("General: " + medianGeneral, "Top 10: " + medianTop10);
}

function calcMedianCountry(list) {
  const medianList = parseInt(list.length / 2);

  if (isEven(list.length)) {
    const firstPeople = list[medianList];
    const secondPeople = list[medianList - 1];
    return calcMediaAritmetica([firstPeople, secondPeople]);
  } else return list[medianList];
}
