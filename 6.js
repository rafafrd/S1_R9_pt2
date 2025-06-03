// Desenvolva um programa que colete e armazene os nomes e as alturas de diferentes pessoas em um vetor. 
// O programa deve permitir que o usuário insira quantas alturas desejar e só deve ser encerrado quando o 
// usuário optar por parar. Ao final, exiba a maior altura, a menor altura e a quem pertencem respectivamente.
let nomes = [];
let alturas = [];

let continuar = true;
let contador = 0;
while (continuar == true) {
  let nome = prompt("Digite o nome da pessoa: ")
  let altura = parseFloat(prompt("Digite a altura: "))

  nomes[contador] = nome
  alturas[contador] = altura
  contador++

  let resposta = prompt("Deseja inserir outra pessoa (S/N)")
  if (resposta == "n" || resposta == "N" || resposta === "não" || resposta === "nao"|| resposta === "Não" || resposta === "Nao") {
    continuar = false
  }
}
console.log(nomes)
console.log(alturas)