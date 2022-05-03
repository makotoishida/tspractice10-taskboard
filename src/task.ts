import { html } from 'lit-html'
import type { Task, TaskboardState } from './types'
import {
  moveTask,
  startTaskEdit,
  endTaskEdit,
  setDragOverElemRef,
  stopEditing,
} from './taskboardStore'
import { formatDate, formatDateForInput, parseDate } from './utils'

function handleStartTaskEdit(ev: MouseEvent) {
  const taskId = (ev?.target as HTMLElement).closest<HTMLElement>('.task')
    ?.dataset.id!
  startTaskEdit(taskId)
}

function handleEndTaskEdit(ev: MouseEvent) {
  ev.preventDefault()
  const taskId = (ev?.target as HTMLElement).closest<HTMLElement>('.task')
    ?.dataset.id!
  const input = document.querySelector<HTMLInputElement>(
    '.task.editing form input.title'
  )!
  const descriptionInput = document.querySelector<HTMLInputElement>(
    '.task.editing form input.description'
  )!
  const dueDateInput = document.querySelector<HTMLInputElement>(
    '.task.editing form input.due-date'
  )!
  const dueDate = parseDate(
    dueDateInput.value ? dueDateInput.value + ' 00:00:00' : ''
  )
  endTaskEdit(taskId, input.value, descriptionInput.value, dueDate)
}

export function Task(task: Task, state: TaskboardState) {
  const isEditing = task.id === state.editing.taskId

  return html` ${isEditing
    ? html`<div data-id="${task.id}" class="task editing">
        <form>
          <input type="text" class="title" value=${task.title} autofocus />
          <input
            type="text"
            class="description"
            value=${task.description}
            autofocus
          />
          <input
            type="date"
            class="due-date"
            value=${formatDateForInput(task.dueDate)}
          />
          <div class="buttons">
            <button
              @click=${() =>
                endTaskEdit(
                  task.id,
                  task.title,
                  task.description,
                  task.dueDate
                )}
              type="button"
            >
              X
            </button>
            <button @click=${handleEndTaskEdit} type="submit">OK</button>
          </div>
        </form>
      </div>`
    : html`<div
        data-id="${task.id}"
        class="task"
        draggable="true"
        @dragstart=${onTaskDragStart}
        @dragenter=${onTaskDragEnter}
        @dragover=${onTaskDragOver}
        @dragleave=${onTaskDragLeave}
        @drop=${onTaskDrop}
        @click=${handleStartTaskEdit}
      >
        <h4 class="task-title">${task.title}</h4>
        <div class="task-description">${task.description}</div>
        <div class="task-due">${formatDate(task.dueDate)}</div>
      </div>`}`
}

let dragStartElem: HTMLElement | null = null

function onTaskDragStart(ev: DragEvent) {
  const id = (ev?.target as HTMLElement)?.dataset.id!
  if (ev.dataTransfer) {
    stopEditing()
    ev.dataTransfer.setData('text/plain', id)
    ev.dataTransfer.effectAllowed = 'move'
    dragStartElem = ev?.target as HTMLElement
  }
}

function onTaskDragEnter(ev: DragEvent) {
  ev.preventDefault()
  const el = (ev.target as HTMLElement).closest<HTMLElement>('.task')!
  setDragOverElemRef(el)
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
  setDragOverElemRef(undefined)

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
