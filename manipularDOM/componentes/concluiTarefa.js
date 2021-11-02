const concluirTarefa = (id, atualiza) => {
  const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))

  tarefaCadastradas[id].concluida =  !tarefaCadastradas[id].concluida

  localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas))

  atualiza()
}

const BotaoConcluir = (id, atualiza) => {
  const botaoConclui = document.createElement('button')

  botaoConclui.classList.add('check-button')
  botaoConclui.innerText = "concluir"
  botaoConclui.addEventListener('click', () => concluirTarefa(id, atualiza))

  return botaoConclui
}

export default BotaoConcluir