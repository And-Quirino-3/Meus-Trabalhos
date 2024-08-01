// Declare uma variével que armazena um objeto contendo as seguintes
// propriedades: nome, idade, altura, renCNH e habilidades.

// Depois, faça um programa que imprima na rela o belo texto abaixo,
// substituindo os dados pessoais pelos dados do objeto:

// Guido tem 33 anos, 1.87m de altura, possui CNH e as seguintes habilidades:
// - JavaScript
// - PHP
// - Python
// - Java

const dados = {nome: 'Guido', idade: 33, altura: 1.87, temCNH: true, habilidades: ['JavaScript', 'PHP', 
    'Python', 'Java'
]}

const possuiCNH = dados.temCNH ? 'possui CNH' : 'Não Possui CNH'

console.log(`${dados.nome} tem ${dados.idade} anos, ${dados.altura}m de altura, ${possuiCNH} e as seguintes habilidades: `)
   for (let item of dados.habilidades) {
    console.log(`- ${item}`)
   }
   