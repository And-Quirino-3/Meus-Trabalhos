const temIngresso: boolean = true
const idade: number = 14
const censura: number = 16
const estaComOsPais: boolean = false

// operador Lógico AND - &&
// Testa se todas condições são verdadeiras

// Operador Lógico OR - ||
// Testa se pelo menos uma condição é verdadeira

// if (temIngresso && idade >= censura) {
//     console.log('Pode Entrar')
// } else {
//     console.log('Barrado')
// }

if (temIngresso && (idade >= censura || estaComOsPais)) {
    console.log('Pode Entrar')
} else {
    console.log('Barrado')
}