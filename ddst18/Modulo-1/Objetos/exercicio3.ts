// Crie um objeto que represente o cartão de consumo de um cliente. deve ter:
// Nome do cliente
// Idade do cliente
// Produtos consumidos
// Cada produto pode ter:
// Nome do produto
// Preço unitário (em centavos)
// Quantidade comprada

// Pode inventar os dados. Coloque pelo menos 3 produtos.

type TProduto = {
    nome: string
    preco: number
    quantidade: number
}

type TCliente = {
    nome: string
    idade: number
    produtos: TProduto[]
}

const cartaoDinho: TCliente = {
    nome: 'Dinho',
    idade: 39,
    produtos: [
        {
            nome: 'Pizza de calabresa',
            preco: 9500,
            quantidade: 1
        },
        {
            nome: 'Refrigerante coca cola lata',
            preco: 500,
            quantidade: 2
        },
        {
            nome: 'pudim',
            preco: 2000,
            quantidade: 3
        }
    ]
}

console.log(cartaoDinho);
