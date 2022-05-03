import { html } from 'lit-html'
import type { TaskboardState, Project } from './types'
import {
  setCurrentProject,
  addLane,
  addProject,
  startProjectEdit,
  endProjectEdit,
  deleteProject,
} from './taskboardStore'
import { Lane } from './lane'
import { deleteIcon } from './icon-delete'

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

function handleDeleteProject(projectId: string) {
  if (!confirm('Are you sure to delete this project?')) return
  deleteProject(projectId)
}

export function Project(state: TaskboardState) {
  if (state.projects.length === 0) {
    return html`<div>Add a new project</div>`
  }

  const proj = state.projects.find((p) => p.id === state.currentProjectId)
  if (!proj) {
    return html`<div>Select a project</div>`
  }

  const isEditing = proj.id === state.editing?.projectId
  const enableDelete = state.projects.length > 1
  const hasLanes = proj.lanes.length > 0

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
            ${enableDelete
              ? deleteIcon(() => handleDeleteProject(proj.id))
              : null}
          </form>`
        : html`<h3 @click=${handleStartProjectEdit}>${proj.title}</h3>
            <button @click=${() => addLane()}>+ Lane</button>`}
    </div>
    ${!hasLanes
      ? html`<div>Add a new lane</div>`
      : html`<div class="lanes">
          ${proj.lanes.map((ln) => Lane(ln, state))}
        </div>`}
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
