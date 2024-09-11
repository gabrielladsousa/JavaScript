function objetoTabela(){
    let obj = {numeros : [1,3,7,9,-1,0,4]};
    return obj;
}

function gerarTabela(){
    let objNumeros = objetoTabela();
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let divQuantidade = document.createElement("div");
    let divSoma = document.createElement("div");
    let qtd;
    let soma = 0;

    for(let i = 0; i < objNumeros.numeros.length; i++){
        let numDiv = document.createElement("div");
        numDiv.innerHTML = objNumeros.numeros[i];
        div2.appendChild(numDiv);
        qtd = i + 1;
        soma = soma + objNumeros.numeros[i];
    }
    div.appendChild(div2);
    document.body.appendChild(div);

    divQuantidade.innerHTML = "Quantidade: " + qtd;
    document.body.appendChild(divQuantidade);
    divSoma.innerHTML = "Soma: " + soma;
    document.body.appendChild(divSoma);

}
