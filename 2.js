// 2 - Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
//  No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.

let numeros = [];
let numero;
for (i = 0; i < 10; i++) {
  numero = parseInt(prompt(`Digite um numero, caso ele seja par, será exibido | nº ${i+1}`))
  if (!isNaN(numero)) {
    if (numero % 2 == 0) {
      numeros[i] = numero;
    }
  } else {
    alert(`Digite um numero valido!`)
    i--
  }
}
console.log(numeros)