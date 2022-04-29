export type Task = {
  id: string
  title: string
  description: string
  dueDate?: Date
}

export type Lane = {
  id: string
  title: string
  tasks: Task[]
}

export type Project = {
  id: string
  title: string
  lanes: Lane[]
}

export type ProjectsStoreState = {
  projects: Project[]
  currentProject: Project
}

export function createStore(
  initialState: ProjectsStoreState,
  onUpdate: (state: ProjectsStoreState) => void
) {
  let state: ProjectsStoreState = { ...initialState }
  onUpdate(state)

  function setCurrentProject(project: Project) {
    if (project === state.currentProject) return
    state = { ...state, currentProject: project }
    onUpdate(state)
  }

  function getTask(project: Project, taskId: string) {
    let lane: Lane | undefined
    let task: Task | undefined
    project.lanes.forEach((i) => {
      const t = i.tasks.find((j) => j.id === taskId)
      if (t) {
        lane = i
        task = t
      }
    })
    return { lane, task }
  }

  function moveTask(taskId: string, toLaneId: string, beforeTaskId?: string) {
    console.log('moveTask: ', taskId, toLaneId, beforeTaskId)
    state = { ...state }
    const { currentProject } = state
    const { lane, task } = getTask(currentProject, taskId)
    console.log(currentProject, lane, task)
    if (!lane || !task) return
    const toLane = currentProject.lanes.find((i) => i.id === toLaneId)
    if (!toLane) return

    let beforeTaskIndex: number = -1
    if (beforeTaskId) {
      beforeTaskIndex = toLane.tasks.findIndex((t) => t.id === beforeTaskId)
    }

    lane.tasks = lane.tasks.filter((t) => t !== task)
    if (beforeTaskIndex >= 0) {
      toLane.tasks.splice(beforeTaskIndex, 0, task)
    } else {
      toLane.tasks.push(task)
    }

    onUpdate(state)
  }

  return {
    state,
    setCurrentProject,
    moveTask,
  }
}
