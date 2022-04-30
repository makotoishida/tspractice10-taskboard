import { html, render } from 'lit-html'
import 'normalize.css'
import './style.css'
import type { TaskboardState } from './types'
import { ProjectSelector, Project } from './project'
import { initTaskboardStore } from './taskboardStore'
import { load, save } from './storage'

function App(state: TaskboardState) {
  return html`<div>${ProjectSelector(state)} ${Project(state)}</div>`
}

async function renderApp(state: TaskboardState) {
  const appRoot = document.querySelector<HTMLDivElement>('#app')!
  render(App(state), appRoot)

  await save(state)
  autoFocus()
}

function autoFocus() {
  const el = document.querySelector<HTMLElement>('[autofocus]')
  if (!el) return
  el.focus()
}

load().then((state) => {
  initTaskboardStore(
    {
      ...state,
      editing: {
        projectId: undefined,
        laneId: undefined,
        taskId: undefined,
      },
      dragdrop: {
        dragOverElem: undefined,
      },
    },
    renderApp
  )
})
