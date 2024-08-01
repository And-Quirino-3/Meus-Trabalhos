// Faça um programa que percorra uma lista de usuários
// para encontrar o usuário "João". Caso encontre, imprima
// "Encontrado", caso contrário, imprima "Não Encontrado"

const usuarios: string[] = ['Dinho', 'Lia', 'Duda', 'Amilton', 'Fernanda', 'Tadeu', 'Maria', 'João']

let encontrado: boolean = false

for (let user of usuarios) {
    if (user === 'João') {
        encontrado = true
        break
    } 
}

if (encontrado) {
    console.log('Encontrado')
} else {
    console.log('Não Encontrado')
}