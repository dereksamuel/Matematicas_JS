function calcMediaAritmetica(list = []) {
  const plusList = list.reduce((accum, item) => accum + +item, 0);
  return plusList / list.length;
}

function isEven(number) {
  return number % 2 === 0;
}

function calcMediana(list) {
  const ascList = list.sort((elementA, elementB) => {
    if (elementA < elementB) return -1;
    if (elementA > elementB) return 1;
    return 0;
  });
  const medList = +ascList.length / 2;
  if (isEven(ascList.length)) {
    const element1 = ascList[medList];
    const element2 = ascList[medList - 1];
    return calcMediaAritmetica([element1, element2]);
  }
  return ascList[medList];
}

function calcMode(list) {
  const listCount = {};

  list.map((item) => {
    if (listCount[item]) {
      listCount[item] += 1;
      return;
    }
    listCount[item] = 1;
  });

  const convertedCountArray = Object.entries(listCount)
    .sort((acomulateValue, newValue) => {
      return newValue[1] - acomulateValue[1];
    });

  return convertedCountArray[0];
}

// let plusItem = 0;
// for (const item of list1) {
//   plusItem += item;
// }
