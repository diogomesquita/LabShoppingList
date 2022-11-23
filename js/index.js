let mostraValorTotal = document.querySelector('.valorTotal');
let campoTexto = document.querySelector('#campo-texto');
let campoPreco = document.querySelector('#campo-preco');
let butaoPreco = document.querySelector('.btn-preco');
let butaoTexto = document.querySelector('.btn-add');
let mudaDiv = document.getElementById('mudaEstado');
let lista = document.querySelector('.lista');
let valorTotal = 0.0;
let listado = [];

function addNewItem() {
    let valorCampo = campoTexto.value;

    if((valorCampo !== "") && (valorCampo !== null) && (valorCampo !== undefined)){
        
        if((valorCampo.length > 7) && (valorCampo.length < 65)){
            let novoItem = `<div id="${listado.length}" class="item">
    <div onclick="selecionaItem(${listado.length})" class="item-icone">
        <i id="icon_${listado.length}" class="mdi mdi-checkbox-blank"></i>
    </div>
    <div onclick="selecionaItem(${listado.length})" class="item-nome">
        ${valorCampo}
    </div>
    <div class="item-botao">
        <button onclick="deletaItem(${listado.length})" class="delete"> <i class="mdi mdi-trash-can-outline"></i> Deletar</button>
    </div>
</div>`;

    lista.innerHTML += novoItem;

    listado.push(valorCampo);
    localStorage.setItem("listado", JSON.stringify(listado));

    checkAnimation();
        } else {
            window.alert("O nome do Item deve ter entre 8 e 64 caracteres.");
        }
    }

    campoTexto.value = "";
    campoTexto.focus();
}

function deletaItem(id) {
    let deleta = document.getElementById(id);
    deleta.remove();
}

function selecionaItem(id) {
    let selecionado = document.getElementById(id);
    let novoIcone = document.getElementById('icon_'+id);
    
    if (selecionado.classList.contains("clicado")) {
        selecionado.classList.remove("clicado");
        novoIcone.classList.replace("mdi-checkbox-marked", "mdi-checkbox-blank");
        mudaDiv.classList.remove("on");
    } else {
        novoIcone.classList.replace("mdi-checkbox-blank", "mdi-checkbox-marked");
        selecionado.classList.add("clicado");
        mudaDiv.classList.add("on");
        campoPreco.focus();
    }
}

function somaPreco() {
    let padraoBR = campoPreco.value.replace(",", ".")
    let preco = Number(padraoBR);
    
    if(!isNaN(padraoBR) && preco >= 0){
        valorTotal += preco;
        let atualizaPreco = `<h2>R$ ${valorTotal}</h2>`;
        mostraValorTotal.innerHTML = atualizaPreco;

        mudaDiv.classList.remove("on");
    } else {
        window.alert("Informe um valor válido!")
    }

    campoPreco.value = "";
    campoPreco.focus();
}

function limpaTotal() {
    valorTotal = 0.0;
    mostraValorTotal.innerHTML = `<h2>R$ ${valorTotal} </h2>`;
}

function checkAnimation() {
    let sucesso = document.getElementById('sucesso');
    sucesso.classList.add("on");
    setTimeout(() => {
        sucesso.classList.remove("on");
    }, 700);

}

// REMOVER ANTES DE ENTREGAR!!!!!!!! é só para teste!
campoTexto.addEventListener("keydown", function(event){
//a tecla enter tem valor 13
    if(event.keyCode === 13){
        event.preventDefault;
        butaoTexto.click();
    }
})

// REMOVER ANTES DE ENTREGAR!!!!!!!! é só para teste!
campoPreco.addEventListener("keydown", function(event){
    //a tecla enter tem valor 13
        if(event.keyCode === 13){
            event.preventDefault;
            butaoPreco.click();
        }
})
