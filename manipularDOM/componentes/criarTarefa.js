import BotaoConcluir from "./concluiTarefa.js"
import BotaoDeleta from "./deletaTarefa.js"
import { carregaTarefa } from "./carregaTarefa.js"

let tarefas = []

export const handleNovoItem = (evento) => {
  evento.preventDefault()

  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
  const lista = document.querySelector('[data-list]')
  const input = document.querySelector('[data-form-input]')
  const valor = input.value

  const calendario = document.querySelector('[data-form-date]')
  const data = moment(calendario.value)
  const horario = data.format('HH:mm')
  const dataFormatada = data.format('DD/MM/YYYY')
  const concluida = false

  const dados = {
    valor, 
    horario,
    dataFormatada,
    concluida
  }

  const tarefasAtualizadas = [...tarefas, dados]

  const criaTarefa = Tarefa(dados)
  lista.appendChild(criaTarefa)
  localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

  input.value = " "


  carregaTarefa()
}

export const Tarefa = ({ valor, horario, concluida }, id) => {
  const tarefa = document.createElement('li')
  const conteudo = `<p class="content">${horario} * ${valor}</p>`

  if(concluida) {
    tarefa.classList.add('done')
  }

  tarefa.classList.add('task')
  tarefa.innerHTML = conteudo
  tarefa.appendChild(BotaoConcluir(id, carregaTarefa))
  tarefa.appendChild(BotaoDeleta(id, carregaTarefa))
  
  return tarefa
}
