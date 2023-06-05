// Union types ==> é um parametro ou variavei utilizando varias tipos de estruturas de dados

// BOA PRATICA DE PROGRAMACAO é FAZER UMA COISA QUE FOI CRIADA ou seja se é para somar apenas somar.

export function addOrConcat(
  a: number | string,
  b: number | string,
): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} ${b}`;
}
console.log(addOrConcat(1, 23));
console.log(addOrConcat('123', 29));
console.log(addOrConcat('213', '123'));
