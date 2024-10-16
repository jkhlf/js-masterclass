// function cadastrar(){
//     //obtem o valor digitado da caixa de texto  com id produto
//     let produto = document.querySelector("#produto").values;
//     let ul= document.querySelector("#reposta");
//     //vamos criar uma li em memoria e inserir na estrutura da pagina
//     //como filho da ul buscada na linha anterior 
//     let li = document.createElement("li");
//     li.innerHTML = produto;
//     ul.appendChild(li);
// }


function obterObjeto(){
let obj = { disciplinas : [ {nome :"Programação p/ Sitios", ch : 80, sigla: "ISW-008", curso : "SI"}
                            ,{nome : "Desenvolvimento p/ Serv I", ch: 80, sigla : "IDS-001", curso: "SI" }
                            ,{nome : "Algebra Linear", ch : 80, sigla : "IMA-002", curso : "ADS"}
                            ,{nome : "POO", ch: 80, sigla: "IAL-004", curso : "ADS"}
                            ,{nome : "Matematica Elementar", ch : 80, sigla : "MTE", curso : "MT"}
                            ],
                nome: "EU" 
                            
                        }  ;
    return obj;

}

function montarTabela(){
 let objDisciplina = obterObjeto();
 let table = document.createElement("table");
 let tHead = document.createElement("thead");
 let tbody = document.createElement("tbody");
 let trhead = document.createElement("tr");
 let thnome = document.createElement("th");
 let thch = document.createElement("th");
 let thsigla = document.createElement("th");
 let thcurso = document.createElement("th");
 thnome.innerHTML = "Nome";
 thch.innerHTML = "CH";
 thsigla.innerHTML = "Sigla";
 thcurso.innerHTML = "Curso";

 tHead.style.backgroundColor = 'blue';
 table.style.backgroundColor = 'red';
 table.style.color = 'black';
 table.style.border= '1px solid';
 
 for(let i=0; i < objDisciplina.disciplinas.length; i++){

    let trdisc = document.createElement("tr");
    let tdNome = document.createElement("td");
    let tdCh = document.createElement("td");
    let tdSigla = document.createElement("td");
    let tdCurso = document.createElement("td");


    tdNome.innerHTML = objDisciplina.disciplinas[i].nome;
    tdCh.innerHTML = objDisciplina.disciplinas[i].ch;
    tdSigla.innerHTML = objDisciplina.disciplinas[i].sigla;
    tdCurso.innerHTML = objDisciplina.disciplinas[i].curso;


    trdisc.appendChild(tdNome);
    trdisc.appendChild(tdCh);
    trdisc.appendChild(tdSigla);
    trdisc.appendChild(tdCurso);
    tbody.appendChild(trdisc);
 }

    tHead.appendChild(thnome);
    tHead.appendChild(thch);
    tHead.appendChild(thsigla);
    tHead.appendChild(thcurso);
    tHead.appendChild(trhead);
    table.appendChild(tHead);
    table.appendChild(tbody);
    document.body.appendChild(table);
}



///Exerc
//João Khalaf & Marcus Bomfim

function obterNumeros() {
    let obj = { numeros: [1, 3, 7, -1, 0, 4, 9], qt: 7 };
    return obj;
}

function divSomar() {
    let objSomar = obterNumeros();

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");

    div1.innerHTML = "1";
    div2.innerHTML = "2";
    div3.innerHTML = "3";
    div4.innerHTML = "4";

    let divQnt = document.createElement("div");
    let divSomatoria = document.createElement("div");

    let sum = 0;
    
    for (let i = 0; i < objSomar.qt; i++) {
        sum += objSomar.numeros[i];
    }

    divQnt.innerHTML = "Quantity: " + objSomar.qt;
    divSomatoria.innerHTML = "Sum: " + sum;

    document.body.appendChild(div1);
    document.body.appendChild(div2);
    document.body.appendChild(div3);
    document.body.appendChild(div4);
    document.body.appendChild(divQnt);
    document.body.appendChild(divSomatoria);
}


    
