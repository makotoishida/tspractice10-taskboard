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

export const sampleProjects: Project[] = [
  {
    title: 'Project 1',
    lanes: [
      {
        title: 'To Do',
        tasks: [
          { title: 'Task 1', description: 'Desc 1' },
          {
            title: 'Task 2',
            description: 'Desc 2',
            dueDate: new Date(2022, 5, 12),
          },
        ],
      },
      {
        title: 'Doing',
        tasks: [
          {
            title: 'AAAAAA',
            description: 'ADADADaDAAd dsad',
            dueDate: new Date(2022, 4, 30),
          },
        ],
      },
      {
        title: 'Done',
        tasks: [
          { title: 'Task 0', description: '000000' },
          {
            title: 'MPMPMPMPmpmpmp',
            description: 'Djkfjdksajfkdsam dsadsa',
          },
        ],
      },
    ],
  },
  {
    title: 'Project 2',
    lanes: [
      {
        title: 'To Do',
        tasks: [{ title: 'Task 1', description: 'Desc 1' }],
      },
      {
        title: 'Doing',
        tasks: [
          {
            title: 'AAAAAA',
            description: 'ADADADaDAAd dsad',
            dueDate: new Date(2022, 4, 30),
          },
        ],
      },
      {
        title: 'Done',
        tasks: [
          {
            title: 'MPMPMPMPmpmpmp',
            description: 'Djkfjdksajfkdsam dsadsa',
            dueDate: new Date(2022, 4, 1),
          },
        ],
      },
    ],
  },
]

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
