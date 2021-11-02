const BotaoDeleta = (id, atualiza) => {
  const botaoDeleta = document.createElement('button')

  botaoDeleta.innerText = 'deletar'
  botaoDeleta.addEventListener('click', () => deletarTarefa(id, atualiza))

  return botaoDeleta
}

const deletarTarefa = (id, atualiza) => {
  const index = id
  const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))

  tarefaCadastradas.splice(index, 1)

  localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas))

  atualiza()
}

export default BotaoDeleta