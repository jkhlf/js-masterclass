
function quadrado (numeros) {
    return numeros.map(num => num*num);
}
let arrayNum = [1,2,3,4,5];
console.log(quadrado(arrayNum));
console.log(arrayNum.map(num=>num*num)); // sem return


function comprimento (array) {
    return array.map(string => string.length);
}
let array = ["java", "tio", "zezinho"];
console.log(comprimento(array));



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

function attC() {
    const d = document.querySelectorAll("div");

    d.forEach(item => {
        item.classList = "nao lembro"
    });
}
attC();



function link() {
    let a = document.querySelectorAll("a");

    a.forEach(item => {
        item.href = "https://www.random.com";
    });
}
link();


function text() {
    document.querySelector('#btn')
    .addEventListener("click", evt => document.querySelectorAll('.classe2')
    .forEach(elem => elem.textContent= "text alt"))
}
text();