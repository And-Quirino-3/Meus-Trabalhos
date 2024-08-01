// Faça um programa que conta quantas letras "a" existem
// numa determinada palavra. Imprima o resultado na tela.

const palavra = 'Araraguara'

let indice = 0

for (let letra of palavra) {
    if (letra === 'a') {
        indice += 1
    }
}
console.log(indice)