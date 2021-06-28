function calcMediaAritmetica(list = []) {
  const plusList = list.reduce((accum, item) => accum + +item, 0);
  return plusList / list.length;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return;
}

function calcMediana(list) {
  const ascList = list.sort((elementA, elementB) => {
    if (elementA < elementB) {
      return -1;
    }
    if (elementA > elementB) {
      return 1;
    }
    return 0;
  });
  const medList = +ascList.length / 2;
  if (isEven(ascList.length)) {
    const element1 = ascList[medList];
    const element2 = ascList[medList - 1];
    console.log();
    return calcMediaAritmetica([element1, element2]);
  }
  return ascList[medList];
}

// let plusItem = 0;
// for (const item of list1) {
//   plusItem += item;
// }
