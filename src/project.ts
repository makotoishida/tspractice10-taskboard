import { html } from 'lit-html'
import type { TaskboardState, Project } from './types'
import {
  setCurrentProject,
  addLane,
  addProject,
  startProjectEdit,
  endProjectEdit,
} from './taskboardStore'
import { Lane } from './lane'

function handleStartProjectEdit(ev: MouseEvent) {
  const projectId = (ev?.target as HTMLElement).closest<HTMLElement>('.project')
    ?.dataset.id!
  startProjectEdit(projectId)
}

function handleEndProjectEdit(ev: MouseEvent) {
  const projectId = (ev?.target as HTMLElement).closest<HTMLElement>('.project')
    ?.dataset.id!
  const input = document.querySelector<HTMLInputElement>(
    '.project-title input'
  )!
  endProjectEdit(projectId, input.value)
}

export function Project(state: TaskboardState) {
  const p = state.currentProject
  const isEditing = p.id === state.editing?.projectId

  return html`<div data-id="${p.id}" class="project">
    <div class="project-title ${isEditing ? 'editing' : ''}">
      ${isEditing
        ? html`<form>
            <input type="text" value=${p.title} />
            <button @click=${() => endProjectEdit(p.id, p.title)} type="button">
              X
            </button>
            <button @click=${handleEndProjectEdit} type="submit">OK</button>
          </form>`
        : html`<h3 @click=${handleStartProjectEdit}>${p.title}</h3>
            <button @click=${() => addLane()}>+ Lane</button>`}
    </div>
    <div class="lanes">${p.lanes.map((i) => Lane(i))}</div>
  </div> `
}

export function ProjectSelector({ projects, currentProject }: TaskboardState) {
  return html`
    <div class="project-selector">
      ${projects.map(
        (i) =>
          html`<div
            class="project ${i === currentProject ? 'active' : ''}"
            @click=${() => setCurrentProject(i)}
          >
            ${i.title}
          </div>`
      )}
      <button @click=${() => addProject()}>+ Project</button>
    </div>
  `
}
