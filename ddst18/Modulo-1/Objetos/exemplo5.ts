const usuario = {
    nome: 'Dinho',
    email: 'dinho.aqs@gmail.com',
    endereco: {
        rua: 'Rua A',
        numero: 123
    }
}

const { nome, email, endereco: {numero, rua}} = usuario

console.log(rua);


