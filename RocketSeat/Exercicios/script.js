let nota = 89

if (nota >= 90) {
    console.log("Nota A")
} else if (nota >= 80) {
    console.log("Nota B")
} else if (nota >= 70) {
    console.log("Nota C")
} else if (nota >= 60) {
    console.log("Nota D")
} else if (nota < 60) {
    console.log("Nota F")
}

let receitas = [2100 + 2000]
let despesas = [4500]
for (let property in receitas && despesas) {
    console.log(receitas - despesas[property])
    if (receitas - despesas[property] >= 0) {
        console.log('Saldo positivo')
    } else if (receitas - despesas[property] <= 0) {
        console.log('Saldo negativo')
    }
}

