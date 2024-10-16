function teste4() {
    let div = document.createElement("div");
    // div.innerHTML= mapf([1,2,3,4], x => 3 * x);
    // document.body.appendChild(div);

    //Atribuição de função e não atribuição
    Array.prototype.mapf= mapf;
    div.innerHTML= [1,2,3,4].mapf( x => 3 * x);
    document.body.appendChild(div);
}

function mapi(f) {

    for(let i = 0; i < lista.length; i++){
        lista[i] = f(lista[i]);
    }
    return lista;
}

function mapf(f) {
    if(this.length == 0){
        return [];
    } 
    [cabeca, ...rabo] = this;

    return[f(cabeca)].concat(rabo.mapf(f));

}

function teste2(){
    let list = document.querySelectorAll("li");
    list.forEach( li => {
        li.style.backgroundColor = "pink"
        li.innerHTML = "visitado"

    } )
}

function eventos () {
    let bnt = document.querySelector("button")
    bnt.addEventListener("click", evt => {
        teste();
        evt.target.innerHTML = "Clicado";
    })

    //Array from converte um nodelist que não tem filter
    //para uma Array que tem filter
    Array.from(document.querySelectorAll("li"))
    .filter( li => li.innerHTML !== "item2")
    .forEach( li => {
        li.addEventListener("click", evt => {
            evt.target.style.backgroundColor = "pink"
            evt.target.innerHTML = "Clicado"
        });
    })
}


function teste() {
    alert('oi');
}

window.onload = eventos;


//Desafio
//Implementar um filter em uma NODELIST, e usar no exemplo.
