import type { TaskboardState, Project, Lane, Task } from './types'
import { getRandomID } from './utils'

let state: TaskboardState
let onUpdate: (state: TaskboardState) => void

export function initTaskboardStore(
  initialState: TaskboardState,
  updateCallback: (state: TaskboardState) => void
) {
  state = { ...initialState }
  onUpdate = updateCallback
  onUpdate(state)

  return { state }
}

export function setCurrentProject(projectId: string) {
  if (projectId === state.currentProjectId) return
  state = { ...state, currentProjectId: projectId }
  onUpdate(state)
}

export function getCurrentProject(state: TaskboardState) {
  return state.projects.find((p) => p.id === state.currentProjectId)
}

function getTask(project: Project, taskId: string) {
  let lane: Lane | undefined
  let task: Task | undefined
  let taskIndex: number = -1
  project.lanes.forEach((ln) => {
    const ix = ln.tasks.findIndex((j) => j.id === taskId)
    if (ix >= 0) {
      lane = ln
      taskIndex = ix
      task = ln.tasks[ix]
    }
  })
  return { lane, task, taskIndex }
}

export function moveTask(
  taskId: string,
  toLaneId: string,
  beforeTaskId?: string
) {
  state = { ...state }
  const currentProject = getCurrentProject(state)
  if (!currentProject) return

  const { lane, task, taskIndex } = getTask(currentProject, taskId)
  if (!lane || !task) return

  const toLane = currentProject.lanes.find((i) => i.id === toLaneId)
  if (!toLane) return

  let beforeTaskIndex: number = -1
  if (beforeTaskId) {
    beforeTaskIndex = toLane.tasks.findIndex((t) => t.id === beforeTaskId)
  }
  console.log('beforeTaskIndex=', beforeTaskIndex)

  // Remove from the current lane.
  lane.tasks.splice(taskIndex, 1)

  // Adjust destination index if moving in the same lane.
  if (lane === toLane && taskIndex <= beforeTaskIndex) {
    beforeTaskIndex--
    console.log('Adjusted: beforeTaskIndex=', beforeTaskIndex)
  }

  // Insert/Add to the new lane.
  if (beforeTaskIndex >= 0) {
    toLane.tasks.splice(beforeTaskIndex, 0, task)
  } else {
    toLane.tasks.push(task)
  }

  onUpdate(state)
}

export function addTask(laneId: string) {
  state = { ...state }
  const currentProject = getCurrentProject(state)
  if (!currentProject) return

  const toLane = currentProject.lanes.find((i) => i.id === laneId)
  if (!toLane) return

  const newTask: Task = {
    id: getRandomID(),
    title: 'New task',
    description: '',
  }
  toLane.tasks.push(newTask)

  onUpdate(state)
}

export function addLane() {
  state = { ...state }
  const currentProject = getCurrentProject(state)
  if (!currentProject) return

  const newLane: Lane = {
    id: getRandomID(),
    title: 'New Lane',
    tasks: [],
  }
  currentProject.lanes.push(newLane)

  onUpdate(state)
}

export function addProject() {
  state = { ...state }

  const newProj: Project = {
    id: getRandomID(),
    title: 'New Project',
    lanes: [],
  }
  state.projects.push(newProj)

  onUpdate(state)
}

export function startProjectEdit(projectId: string) {
  state = {
    ...state,
    editing: {
      ...state.editing,
      projectId,
      laneId: undefined,
      taskId: undefined,
    },
  }
  onUpdate(state)
}

export function endProjectEdit(projectId: string, title: string) {
  state = { ...state, editing: { ...state.editing, projectId: undefined } }

  const project = state.projects.find((p) => p.id === projectId)
  if (!project) return

  project.title = title
  onUpdate(state)
}

export function setDragOverElemRef(el?: HTMLElement) {
  state.dragdrop.dragOverElem = el
}
export function getDragOverElemRef() {
  return state.dragdrop.dragOverElem
}
