let campoTexto = document.querySelector('#campo-texto');
let butao = document.querySelector('.btn-add');
let lista = document.querySelector('.lista');
let listado = [];

function addNewItem() {
    let valorCampo = campoTexto.value;

    if((valorCampo !== "") && (valorCampo !== null) && (valorCampo !== undefined)){
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
    } else {
        novoIcone.classList.replace("mdi-checkbox-blank", "mdi-checkbox-marked");
        selecionado.classList.add("clicado");
    }
}

// REMOVER ANTES DE ENTREGAR!!!!!!!!
campoTexto.addEventListener("keyup", function(event){
//a tecla enter tem valor 13
    if(event.keyCode === 13){
        event.preventDefault;
        butao.click();
    }
})