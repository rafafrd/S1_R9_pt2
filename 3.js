let lista = [];
let chave = parseInt(prompt("Digite um numero para procurar de 1 a 15"))
let vezes = 0;
let posicoes = [];
for (let i = 0; i < 30; i++) {
  let numeroAleatorio = Math.ceil(Math.random() * 15);
  lista[i] = numeroAleatorio;
  if (numeroAleatorio === chave) {
    vezes++;
    posicoes[vezes - 1] = i;
  }
}
console.log(`O número ${chave} aparece nas posições: ${posicoes}`);
console.log(`Foi encontrado ${vezes} vezes.`);