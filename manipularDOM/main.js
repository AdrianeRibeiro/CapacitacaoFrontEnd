import { handleNovoItem } from "./componentes/criarTarefa.js"
import { carregaTarefa } from "./componentes/carregaTarefa.js"

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', handleNovoItem)

carregaTarefa()