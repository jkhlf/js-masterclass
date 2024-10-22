
//Crie uma funcao que receba um array de numeros inteiros e retorne um novo
//array contendo o quadrado de cada valor. Use o aparato funcional.
function quadrado (numeros) {
    return numeros.map(num => num*num);
}
let arrayNum = [1,2,3,4,5];
console.log(quadrado(arrayNum));

console.log(arrayNum.map(num=>num*num)); // sem return


//Crie uma funcao que receba um array de strings e retorne um novo array contendo o comprimento (numero de caracteres) de cada string. Use o aparato funcional.
function comprimento (array) {
    return array.map(string => string.length);
}

let array = ["java", "tio", "zezinho"];
console.log(comprimento(array));



//Escreva uma funcao que filtre e retorne somente os numeros pares maiores que 70 de um array de numeros inteiros. Use o aparato funcional.
function numPar(array) {
    return array.filter(num => num % 2 == 0 && num > 70);
}

let num = [5, 4, 69, 80, 70, 90, 100];
console.log(numPar(num));




function maior(array) {
    console.log(array.filter(string => string.length>5));
}
maior(["Java", "teu Tio", "Cobrinha"]);


function imprimir(){
    const list = document.querySelectorAll('li');

    list.forEach(item => {
        console.log(item.textContent);
    });
}

imprimir();



function p () {
    let p = document.querySelectorAll('p');

    p.forEach(item => {
        item.style.color= "blue";
    });
}

p();




function att() {
    const element = document.querySelectorAll('classe1');

    element.forEach(item => {
        item.textContent = "Att"
    });
}

att();


