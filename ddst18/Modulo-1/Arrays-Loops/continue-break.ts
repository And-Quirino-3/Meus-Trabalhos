const listaFrutas: string[] = ['banana', 'abacaxi', 'maçã', 'uva', 'manga']

// Break

for (let item of listaFrutas) {
    if (item === 'uva') {
        break
    }
    console.log(item)
}

// continue

for (let item of listaFrutas) {
    if (item === 'uva') {
        continue
    }
    console.log(item)
}
