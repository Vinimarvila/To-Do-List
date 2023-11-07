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
        <img src="file:///C:/Users/vinic/Downloads/check-solid.svg" alt="checked-na-tarefa" onclick="concluirTarefa(${index})">
        <p>${item.tarefa}</p>
        <img src="file:///C:/Users/vinic/Downloads/trash-can-regular.svg" alt="Tarefa-para-lixo" onclick="deletarItem(${index})">
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
