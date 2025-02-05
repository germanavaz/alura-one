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

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function imc(altura, peso) {
    return peso/(altura*altura);
}

imc(1.68, 80);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.