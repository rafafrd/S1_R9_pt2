// 1 - Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. 
// No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.

let nomes = [];
let nome;

for (let i = 7; i != 0; i--){
  nome = prompt(`Digite um nome, faltam ${i}`)
  if (isNaN(nome)) { 
  nomes[i] = nome
  } else {
    alert("Digite um valor valido")
    i++
  }
}
console.log(nomes)