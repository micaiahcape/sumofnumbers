function sumFor(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function sumWhile(arr) {
  let total = 0;
  let i = 0;
  while (i < arr.length) {
    total += arr[i];
    i++;
  }
  return total;
}

function sumRecursion(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRecursion(arr.slice(1));
}

function sumTheSimpleWay(arr) {
  return _.reduce(arr, (memo, total) => {return memo + total}, 0);
}

console.log(`Sum For: ${sumFor([1, 2, 3, 4, 5])}`);
console.log(`Sum While: ${sumWhile([1, 2, 3, 4, 5])}`);
console.log(sumRecursion([1, 2, 3, 4, 5]));
console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));
