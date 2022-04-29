export type Task = {
  title: string
  description: string
  dueDate?: Date
}

export type Lane = {
  title: string
  tasks: Task[]
}

export type Project = {
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

  return {
    state,
    setCurrentProject: (project: Project) => {
      if (project === state.currentProject) return
      state = { ...state, currentProject: project }
      onUpdate(state)
    },
  }
}
