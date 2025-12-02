const input = document.getElementById("inputTarefa");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");

function adicionarTarefa() {
    const textoTarefa = input.value;

    if (textoTarefa === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const novoItem = document.createElement("li");
    novoItem.innerText = textoTarefa;

    novoItem.addEventListener("click", function() {
        novoItem.classList.toggle("feita");
    });

    novoItem.addEventListener("dblclick", function() {
        lista.removeChild(novoItem);
    });

    lista.appendChild(novoItem);

    input.value = "";
}


botao.addEventListener("click", adicionarTarefa);


input.addEventListener("keypress", function(evento) {
    if (evento.key === "Enter") {
        adicionarTarefa();
    }
});