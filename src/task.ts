import { html } from 'lit-html'
import type { Task } from './types'
import {
  moveTask,
  setDragOverElemRef,
  getDragOverElemRef,
} from './taskboardStore'
import { formatDate } from './utils'

export function Task(task: Task) {
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

let dragStartElem: HTMLElement | null = null

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
