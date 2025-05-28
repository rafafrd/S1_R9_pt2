// 4) Peça ao usuário para digitar 10 números e armazene em um vetor. 
// Depois, crie um novo vetor removendo os valores duplicados. Exiba o vetor original e o vetor sem duplicatas.

let array1 = [];
let array2 = [];
let cont2 = 0;

for (let i = 0; i < 10; i++) {
  let numero = Math.ceil(Math.random() * 10); // parseInt(prompt(`Digite o n°${i + 1}`))
  array1[i] = numero;
}
for (let i = 0; i < array1.length; i++) {
  let repetido = false;
  for (let j = 0; j < cont2; j++) {
    if (array1[i] == array2[j]) {
      repetido = true;
      break;
    }
  }
  if (!repetido) {
    array2[cont2] = array1[i];
    cont2++;
  }
}
console.log("Array original:", array1);
console.log("Array sem valor duplicado:", array2);