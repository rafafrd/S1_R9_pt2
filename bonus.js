// array 1 , array 2 com numeros aleatórios, (10 posiçoes),
// compare eles e crie um array 3 que armazene os numeros que repitiram nas outras, sem duplucar
/* 
Exemplo:
a1 = [1,3,5,3,5,7]
a2 = [4,5,8,2,3,9]
a2 = [5,3]
*/

let array1 = [1, 4, 5, 3, 3, 5, 7, 9, 6];
let array2 = [1, 6, 8, 8, 3, 5, 9, 7, 4];
let array3 = [];
let cont = 0;

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array2[j] == array1[i]) {
      let jaExiste = false;//reseta
      for (let k = 0; k < array3.length; k++) {
        if (array3[k] == array1[i]) {
          jaExiste = true;//pula
          break;//sai do loop
        }
      }
      if (!jaExiste) { //retorn falso
        array3[cont] = array1[i];
        cont++;
      }
      break;//sai do loop
    }
  }
}
console.log(`Os numero se que se repetem são: ${array3}`);