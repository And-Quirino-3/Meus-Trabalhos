// rest -> resto ou sobra
const pessoas = ['Dinho', 'Fernanda', 'Tadeu']

const [ item1, ...sobra] = pessoas

const usuario = {
    nome: 'Dinho',
    email: 'dinho.aqs@gmail.com',
    idade: 39
}

const {idade, ...sobraObjeto} = usuario

//console.log(sobraObjeto)

// spread -> espalhamento

const carros = ['Pálio', 'Gol']

const novosCarros = [...carros, 'Ferrari', 'Fusca']

console.log(novosCarros);

