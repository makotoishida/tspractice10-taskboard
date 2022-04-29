import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'
import type { TaskboardState } from './types'
import { ProjectSelector, Project } from './taskboard'
import { initTaskboardStore } from './taskboardStore'
import exampleData from './exampleData'

function App(state: TaskboardState) {
  return html`<div>${ProjectSelector(state)} ${Project(state)}</div>`
}

function renderApp(state: TaskboardState) {
  const appRoot = document.querySelector<HTMLDivElement>('#app')!
  render(App(state), appRoot)
}

initTaskboardStore(
  {
    projects: exampleData,
    currentProject: exampleData[0],
  },
  renderApp
)

