// Leia dois vetores de 5 elementos cada (valores inteiros). Crie um terceiro vetor que contenha apenas os elementos que estão em ambos os vetores (interseção, sem repetição).
// Exemplo:
// Vetor 1 → [1, 2, 3, 4, 5]
// Vetor 2 → [3, 4, 5, 6, 7]
// Resultado → [3, 4, 5]

let array1 =  [1, 2, 3, 4, 5];
let array2 =  [3, 4, 5, 6, 7];
let array3 = [];
let cont = 0;

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array2[j] == array1[i]) {
      let naoExiste = false;
      for (let k = 0; k < array3.length; k++) {
        if (array3[k] == array1[i]) {
          naoExiste = true;
          break;//sai do loop
        }
      }
      if (!naoExiste) {
        array3[cont] = array1[i];
        cont++;
      }
      break;//sai do loop
    }
  }
}
console.log(`Os numero se que se não repetem são: ${array3}`);
console.log(array3)