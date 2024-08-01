// Crie um array de números aleatórios e faça um programa
// que calcule e imprima na tela a soma dos itens de um array
// Requisito: usar o loop for tradicional

let numeros: number[] = [2, 8, 5, 7, 3, 9]

let resultado = 0

for (let i = 0; i < numeros.length; i++ ) {
    resultado += numeros[i]    
}

console.log(resultado)