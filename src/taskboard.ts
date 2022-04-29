import { html } from 'lit-html'
import type { TaskboardState, Project, Lane, Task } from './types'
import { setCurrentProject, moveTask } from './taskboardStore'
import { formatDate } from './utils'

function Task(task: Task) {
  return html`<div
    data-id="${task.id}"
    class="task"
    draggable="true"
    @dragstart=${onTaskDragStart}
    @dragenter=${onTaskDragEnter}
    @dragover=${onTaskDragOver}
    @dragleave=${onTaskDragLeave}
    @drop=${onTaskDrop}
  >
    <h4 class="task-title">${task.title}</h4>
    <div class="task-description">${task.description}</div>
    <div class="task-due">${formatDate(task.dueDate)}</div>
  </div>`
}

function Lane(lane: Lane) {
  return html`<div data-id="${lane.id}" class="lane">
    <h4 class="lane-title">${lane.title}</h4>
    <div
      class="tasks"
      @dragenter=${onLaneDragEnter}
      @dragover=${(ev: DragEvent) => onLaneDragOverLeave(ev, true)}
      @dragleave=${(ev: DragEvent) => onLaneDragOverLeave(ev, false)}
      @drop=${(ev: DragEvent) => onLaneDrop(ev)}
    >
      ${lane.tasks.map((i) => Task(i))}
    </div>
  </div>`
}

export function Project(state: TaskboardState) {
  const p = state.currentProject
  return html`<div data-id="${p.id}" class="project">
    <h3 class="project-title">${p.title}</h3>
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
    </div>
  `
}

let dragStartElem: HTMLElement | null = null
let dragOverElem: HTMLElement | null = null

function onTaskDragStart(ev: DragEvent) {
  const id = (ev?.target as HTMLElement)?.dataset.id!
  if (ev.dataTransfer) {
    ev.dataTransfer.setData('text/plain', id)
    ev.dataTransfer.effectAllowed = 'move'
    dragStartElem = ev?.target as HTMLElement
  }
}

function onTaskDragEnter(ev: DragEvent) {
  ev.preventDefault()
  const el = (ev.target as HTMLElement).closest<HTMLElement>('.task')!
  dragOverElem = el
}

function onTaskDragOver(ev: DragEvent) {
  ev.preventDefault()

  const el = (ev.target as HTMLElement).closest<HTMLElement>('.task')!
  if (dragStartElem === el) return

  el.classList.remove('over-top', 'over-bottom')
  const rect = el.getBoundingClientRect()
  if (ev.clientY - rect.top < el.clientHeight / 2) {
    el.classList.add('over-top')
  } else {
    el.classList.add('over-bottom')
  }
}

function onTaskDragLeave(ev: DragEvent) {
  ev.preventDefault()
  const el = (ev.target as HTMLElement).closest<HTMLElement>('.task')!
  el.classList.remove('over-top', 'over-bottom')
}

function onTaskDrop(ev: DragEvent) {
  ev.preventDefault()
  dragOverElem = null

  if (![...(ev?.dataTransfer?.types ?? [])].includes('text/plain')) return

  const taskId = ev?.dataTransfer?.getData('text/plain')
  // ev?.dataTransfer?.clearData()    // <-- Causes an error on FireFox.
  if (!taskId) return

  const el = (ev.target as HTMLElement).closest<HTMLElement>('.task')!
  if (dragStartElem === el) return

  let beforeTaskId = el.dataset.id

  el.classList.remove('over-top', 'over-bottom')
  if (taskId === beforeTaskId) return

  const rect = el.getBoundingClientRect()
  const isBefore = ev.clientY - rect.top < el.clientHeight / 2
  if (!isBefore) {
    const siblings = Array.from(
      el.parentElement?.querySelectorAll('.task') ?? []
    ) as HTMLElement[]
    const nextIndex = siblings.findIndex((i) => i === el)
    const nextEl = nextIndex >= 0 ? siblings[nextIndex + 1] : undefined
    beforeTaskId = nextEl?.dataset?.id
  }
  if (taskId === beforeTaskId) return

  const toLaneId = el.closest<HTMLElement>('.lane')!.dataset.id!
  moveTask(taskId, toLaneId, beforeTaskId)
}

function onLaneDragEnter(ev: DragEvent) {
  ev.preventDefault()
  const el = (ev.target as HTMLElement).closest('.tasks')!
  el.classList.add('over')
  dragOverElem = ev.target as HTMLElement
}

function onLaneDragOverLeave(ev: DragEvent, isOver: boolean) {
  ev.preventDefault()
  const el = (ev.target as HTMLElement).closest<HTMLElement>('.tasks')!
  if (isOver) {
    el.classList.add('over')
  } else {
    el.classList.remove('over')
  }
}

function onLaneDrop(ev: DragEvent) {
  ev.preventDefault()
  if (![...(ev?.dataTransfer?.types ?? [])].includes('text/plain')) return

  const el = (ev.target as HTMLElement).closest('.tasks')!
  el.classList.remove('over')
  if (dragOverElem !== el) return
  dragOverElem = null

  const taskId = ev?.dataTransfer?.getData('text/plain')
  // ev?.dataTransfer?.clearData()    // <-- Causes an error on FireFox.
  if (!taskId) return

  const toLaneId = el.closest<HTMLElement>('.lane')?.dataset?.id!
  moveTask(taskId, toLaneId)
}
