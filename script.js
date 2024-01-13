let nome = prompt('Digite seu nome: ');
console.log('Bem vindo ' + nome);

let n1 = Number(prompt(' Digite o primeiro número: '));
let n2 = Number(prompt(' Digite o segundo número: '));

console.log(nome + ' o resultado da soma dos dois números é: ' + (n1 + n2) )
let ano_atual = new Date().getFullYear();
let idade = prompt(`${nome} digite a sua idade: `)
console.log('Seu ano de nascimento é: ' + (2023 - +idade))

let raio = prompt(`${nome} digite o raio de um círculo: `)

console.log(`A área do círculo do raio digitado é ${(Math.PI*(raio**2)).toFixed(2)}`)

let valor = prompt(`${nome} digite um valor em dolar: `)
console.log(`O valor digitado convertido em euro é:  ${valor*(0.85)}`)

let valorMetros = prompt(`${nome} digite um valor em metros: `)
console.log(`O valor digitado convertido em centimetros é:  ${valor*(100)}`)

let valorHora = prompt(`${nome} Quanto você ganha por hora: `)
let horasTrabalhadas = prompt(`${nome} Quantas horas você trabalhou no mês: `)
let valorBruto = valorHora*horasTrabalhadas;
let desconto_ir = ((valorHora*horasTrabalhadas).toFixed(2)*0.11).toFixed(2)
let desconto_inss = ((valorHora*horasTrabalhadas).toFixed(2)*0.08).toFixed(2)
let desconto_sindicato = ((valorHora*horasTrabalhadas).toFixed(2)*0.05).toFixed(2)

console.log(`O valor do salário bruto no mês é:  ${(valorBruto).toFixed(2)}`)
console.log(`O valor do desconto do imposto de renda é:  ${desconto_ir}`)
console.log(`O valor do desconto do INSS é:  ${desconto_inss}`)
console.log(`O valor do desconto do dindicato é:   ${desconto_sindicato}`)
console.log(`O valor a receber é:  ${valorBruto - desconto_sindicato - desconto_ir - desconto_inss}`)

