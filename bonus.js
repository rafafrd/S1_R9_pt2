// array 1 , array 2 com numeros aleatórios, (10 posiçoes),
// compare eles e crie um array 3 que armazene os numeros que repitiram nas outras, sem duplucar
// e mostre a "chave" (posição) que eles foram encontrados

/* 
Exemplo:
a1 = [1,3,5,3,5,7]
a2 = [4,5,8,2,3,9]
a2 = [5,3]
O 5,3 foi encontrado nas posiçoes 2,3,4,5 na primeira lista e 2,5 na segunda lista
*/

let array1 = [1,4,5,3,5,7];
let array2 = [1,6,8,3,5,9];
let array3 = [];
let num;
for (let i = 0; i < array1.length; i++) {
  num = array1[i]
  if (num == array2[i]) {
    array3[i] = num
  }
}
console.log(num, array3)