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
  ev.preventDefault()
  const projectId = (ev?.target as HTMLElement).closest<HTMLElement>('.project')
    ?.dataset.id!
  const input = document.querySelector<HTMLInputElement>(
    '.project-title input'
  )!
  endProjectEdit(projectId, input.value)
}

export function Project(state: TaskboardState) {
  const proj = state.projects.find((p) => p.id === state.currentProjectId)
  if (!proj) {
    return html`<div>Select a project</div>`
  }

  const isEditing = proj.id === state.editing?.projectId

  return html`<div data-id="${proj.id}" class="project">
    <div class="project-title ${isEditing ? 'editing' : ''}">
      ${isEditing
        ? html`<form>
            <input type="text" value=${proj.title} autofocus />
            <button
              @click=${() => endProjectEdit(proj.id, proj.title)}
              type="button"
            >
              X
            </button>
            <button @click=${handleEndProjectEdit} type="submit">OK</button>
          </form>`
        : html`<h3 @click=${handleStartProjectEdit}>${proj.title}</h3>
            <button @click=${() => addLane()}>+ Lane</button>`}
    </div>
    <div class="lanes">
      ${proj.lanes.map((ln) => Lane(ln, ln.id === state.editing?.laneId))}
    </div>
  </div> `
}

export function ProjectSelector({
  projects,
  currentProjectId,
}: TaskboardState) {
  return html`
    <div class="project-selector">
      ${projects.map(
        (i) =>
          html`<div
            class="project ${i.id === currentProjectId ? 'active' : ''}"
            @click=${() => setCurrentProject(i.id)}
          >
            ${i.title}
          </div>`
      )}
      <button @click=${() => addProject()}>+ Project</button>
    </div>
  `
}
