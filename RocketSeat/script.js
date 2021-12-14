// comentários com as barras
//o código abaixo escreve algumaq mensagem no devtools

/*console.log('Bem vindos ao starter');
let name = "Rober";
let age = 60;
let stars = 2.5;
let isSubscribed = true;
let weight = 50;*/


let student = {
    name: "bozo",
    age: 45,
    weight: 50,
};

const john = {
    name: "John",
    age: 35,
    weight: 95.5,
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} quilos`);

/* students[1] = john;
console.log(students); */

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")

let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)

let word = "manipulação"
console.log(Array.from(word))

//manipulando Arrays
let techs = ["html", "css", "js"]
//adicionar um item no fim
techs.push("nodejs")
//adicionar no começo
techs.unshift("sql")
//remover no fim
//techs.pop()
//remover no começo
//techs.shift()
//pegar somente alguns elementos do Array
//console.log(techs.slice(1, 3))
//removar 1 ou mais itens em qualquer posição do Array
//techs.splice(1, 3)
//encontrar a posição de um elemnto no Array
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)

/*let pharseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)*/

//Operator Binary
let number = 1
console.log(number + 1)
//Unary
let number2 = 2
console.log(++number2)
//Ternary
let number3 = 3
//operador condicional
console.log(true ? 'alo' : 'nada')

//operadores aritiméticos

//multiplicação *
console.log("multiplicacao", 43.2 * 5)
//divisão  /
console.log(12 / 2)
//soma  +
console.log(34 + 87)
//subtração  -
console.log('subtração', 35 - 21)
//resto da divisão  %
let remainder
remainder = 11 % 9
//incremento
let increment = 0
increment++
increment++
console.log(increment)
//decremento
let decrement = 0
decrement--
console.log(decrement)
//exponencial **
console.log(5 ** 2)
//grouping operator
let total = (2 + 3) * 5
console.log(total)
//operadores de comparação (com boolean)
//igual a (==)  diferente de (!=)
let one = 1
let two = 2
console.log(two == 1)
console.log(one == '1')
console.log(one != 2)
console.log(one != 1)
//operadores de comparação do tipo estritamento
console.log(one === "1")
console.log(one === 1)
//operadores de atribuição (assignment)
let x
console.log(x)
x = 1
x += 2
//x = x + 2  (-= *=)

//operadores lógicos (logical operators)
let pao = true
let queijo = true
//AND &&
console.log(pao && queijo)
//OR ||
console.log(pao || queijo)
//not !  (nega/troca o valor da variável)
console.log(!pao)

let temperature = 36.9

if (temperature >= 37) {
    console.log("Febre alta")
} else if (temperature < 37.5 && temperature >= 37) {
    console.log("Febre moderada")
} else {
    console.log("Saudável")
}

let expression = 'a'

switch (expression) {
    case 'a':
        //codigo
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    // default:
    //     console.log (default)
    //     break
}

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 8))

//throw
function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é obrigatório")
    }
}

//try e catch
try {
    sayMyName()

} catch (e) {
    console.log(e)
}

console.log('após a função de erro')

//estrutura de repetição
//for

// for(let i = 10; i > 10; i--) {
//     if(i === 5){
//         continue;
//     }
//     console.log(i)
//}

//while
let i = 40
while (i > 10) {
    console.log(i)
    i /= 20
}

//for...of
let name = 'Trick'
let names = ['Pedro', 'Rober', 'Pablo']

for (let name of names) {
    console.log(name)
}

//for...in
let person = {
    name: 'John',
    age: 30,
    weight: 88.6,
}
for (let property in person) {
    console.log(property)
    console.log(person[property])
}

//Dispara um evento
const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')




