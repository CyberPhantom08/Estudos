function createPhrases() {
    console.log('Vem papi')
    console.log('Pega aqui')
    console.log('Chupa vai')
};

createPhrases();

const sum = function(number1, number2){
    total = number1 + number2
    return total
};

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

function fazerSuco(fruta1, fruta2){
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')
console.log(copo)

let subject = 'create video'

function createThink() {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink()) //faz o retorno na função e torna o subject no novo número função
console.log(subject)

//hoisting
sayMyName()

function sayMyName() {
    console.log('Trick')
}

//function constructor
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const trick = new Person("Trick")
const rober = new Person("Rober")
console.log(trick.walk())
console.log(rober.walk())
