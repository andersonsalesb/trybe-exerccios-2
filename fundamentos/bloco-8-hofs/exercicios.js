// Utilize o reduce para transformar uma matriz em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(valor) {
  return valor.reduce((curr, acc)=> { curr += acc,[] })
}
console.log(flatten(arrays));
console.log(arrays.reduce);