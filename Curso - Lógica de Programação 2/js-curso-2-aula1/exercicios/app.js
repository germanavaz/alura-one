// Criar uma função que exibe "Olá, mundo!" no console.

function olamundo(){
    return console.log("Olá mundo");
}
olamundo();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function olanome(nome) {
    return console.log(`Olá, ${nome}!`)
}
olanome('Germana');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function retornaDobro(numero) {
    return console.log(numero*2)
}

retornaDobro(2);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function mediaDe3(numero1, numero2, numero3) {
    let media = (numero1+numero2+numero3)/3;
    return console.log(media)
}

mediaDe3(10, 9, 8);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function retornaMaior(num1, num2) {
    if (num1 > num2) {
        return console.log(num1)
    } else {
        return console.log(num2)
    }
}

retornaMaior(30, 20)

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicado(numMultiplicar) {
    return console.log(numMultiplicar*numMultiplicar)
}

multiplicado(3)