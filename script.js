const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector('.list-tasks');

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: true
  });
  input.value = "";
  mostrarTarefas();
}

function mostrarTarefas() {
  let novaLi = "";

  minhaListaDeItens.forEach((item, index) => {
    novaLi += `
      <li class="task ${item.concluida ? "done" : ""}">
        <img src=https://fontawesome.com/icons/check?f=classic&s=solid
        <p>${item.tarefa}</p>
        <img src=https://fontawesome.com/icons/trash-can?f=classic&s=solid
      </li>`;
  });

  listaCompleta.innerHTML = novaLi;
  localStorage.setItem("lista", JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(index) {
  minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida;
  mostrarTarefas();
}

function deletarItem(index) {
  minhaListaDeItens.splice(index, 1);
  mostrarTarefas();
}
function recarregarTarefas(){
  const tarefasDoLocalStorage = localStorage.getItem("lista")

  if(tarefasDoLocalStorage){
  minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
  }
  mostrarTarefas()

}
recarregarTarefas()
button.addEventListener("click", adicionarNovaTarefa);
