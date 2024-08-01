const nome = 'Dinho'
const idade = 39
const temCNH = false

const usuario = {nome: 'Dinho', idade: 39, temCNH: false, habilidades: ['JS', 'php', 'java', 'python']}

// usuario['habilidade'] => acessa uma propriedade do objeto
// usuario.nome => acessa uma propriedade do objeto
// usuario['teste'] => retorna undefined pois a propriedade não foi definida

usuario.email = 'dinho.aqs@gmail.com'  // adicionando propriedade no objeto

console.log(usuario)