// const usuarios = ['Dinho', 'João', 'Maria']

const usuarios = [
    {
        nome: 'Dinho',
        email: 'dinho.aqs@gmail.com'
    },
    {
        nome: 'João',
        email: 'joao@email.com'
    },
    {
        nome: 'Maria',
        email: 'maria@email.com'
    }
]

for (let usuario of usuarios) {
    console.log(`Nome: ${usuario.nome}, Email: ${usuario.email}`)
}