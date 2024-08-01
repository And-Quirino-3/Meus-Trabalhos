// Crie um sistema de distribuição de senha por ordem de chegada
// a fila será representada pelo array ['Dinho', 'João', 'Fernanda', 'Maria', 'Pedro', 'Ana']
// Você deve criar uma lista onde cada item represente um objeto contendo a senha e o nome da pessoa.
// A senha começa sempre em 1

const fila = ['Dinho', 'João', 'Fernanda', 'Maria', 'Pedro', 'Ana']

const pessoas = []

for (let i = 0; i < fila.length; i++) {
    pessoas[i] = {
        nome: fila[i],
        senha: i + 1
    }
}

console.log(pessoas);