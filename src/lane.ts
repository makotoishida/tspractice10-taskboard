import { html } from 'lit-html'
import type { Lane, TaskboardState } from './types'
import {
  moveTask,
  addTask,
  startLaneEdit,
  endLaneEdit,
  setDragOverElemRef,
  getDragOverElemRef,
  deleteLane,
  getCurrentProject,
} from './taskboardStore'
import { Task } from './task'
import { deleteIcon } from './icon-delete'

function handleStartLaneEdit(ev: MouseEvent) {
  const laneId = (ev?.target as HTMLElement).closest<HTMLElement>('.lane')
    ?.dataset.id!
  startLaneEdit(laneId)
}

function handleEndLaneEdit(ev: MouseEvent) {
  ev.preventDefault()
  const laneId = (ev?.target as HTMLElement).closest<HTMLElement>('.lane')
    ?.dataset.id!
  const input = document.querySelector<HTMLInputElement>('.lane-title input')!
  endLaneEdit(laneId, input.value)
}

function handleDeleteLane(laneId: string) {
  if (!confirm('Are you sure to delete this lane?')) return
  deleteLane(laneId)
}

export function Lane(lane: Lane, state: TaskboardState) {
  const isEditing = lane.id === state.editing?.laneId

  return html`<div data-id="${lane.id}" class="lane">
    <div class="lane-title ${isEditing ? 'editing' : ''}">
      ${isEditing
        ? html`<form>
            <input type="text" value=${lane.title} autofocus />
            <button
              @click=${() => endLaneEdit(lane.id, lane.title)}
              type="button"
            >
              X
            </button>
            <button @click=${handleEndLaneEdit} type="submit">OK</button>
            ${deleteIcon(() => handleDeleteLane(lane.id))}
          </form>`
        : html`<h4 @click=${handleStartLaneEdit}>${lane.title}</h4>
            <button @click=${() => addTask(lane.id)}>+</button>`}
    </div>
    <div
      class="tasks"
      @dragenter=${onLaneDragEnter}
      @dragover=${(ev: DragEvent) => onLaneDragOverLeave(ev, true)}
      @dragleave=${(ev: DragEvent) => onLaneDragOverLeave(ev, false)}
      @drop=${(ev: DragEvent) => onLaneDrop(ev)}
    >
      ${lane.tasks.map((t) => Task(t, state))}
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
