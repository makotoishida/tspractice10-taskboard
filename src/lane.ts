import { html } from 'lit-html'
import type { Lane } from './types'
import {
  moveTask,
  addTask,
  setDragOverElemRef,
  getDragOverElemRef,
} from './taskboardStore'
import { Task } from './task'

export function Lane(lane: Lane) {
  return html`<div data-id="${lane.id}" class="lane">
    <div class="lane-title">
      <h4>${lane.title}</h4>
      <button @click=${() => addTask(lane.id)}>+</button>
    </div>
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

function onLaneDragEnter(ev: DragEvent) {
  ev.preventDefault()
  const el = (ev.target as HTMLElement).closest('.tasks')!
  el.classList.add('over')
  setDragOverElemRef(ev.target as HTMLElement)
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
  if (getDragOverElemRef() !== el) return
  setDragOverElemRef(undefined)

  const taskId = ev?.dataTransfer?.getData('text/plain')
  // ev?.dataTransfer?.clearData()    // <-- Causes an error on FireFox.
  if (!taskId) return

  const toLaneId = el.closest<HTMLElement>('.lane')?.dataset?.id!
  moveTask(taskId, toLaneId)
}
