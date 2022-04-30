import { TaskboardState } from './types'
import { formatDateForStorage, getRandomID, parseDate } from './utils'

const STORAGE_KEY = 'taskboard'

export async function save(state: TaskboardState) {
  const s = JSON.stringify({
    ...state,
    currentProjectId: state.currentProject.id,
    projects: state.projects.map((p) => ({
      ...p,
      lanes: p.lanes.map((ln) => ({
        ...ln,
        tasks: ln.tasks.map((t) => ({
          ...t,
          dueDate: formatDateForStorage(t.dueDate),
        })),
      })),
    })),
  })
  window.localStorage.setItem(STORAGE_KEY, s)
}

export async function load(): Promise<TaskboardState> {
  const s = window.localStorage.getItem(STORAGE_KEY) ?? '{}'
  const tempState = JSON.parse(s) as any
  const currentProjectId = tempState.currentProjectId

  const state: TaskboardState = {
    ...tempState,
    projects:
      tempState.projects?.map((p: any) => ({
        ...p,
        lanes:
          p.lanes?.map((ln: any) => ({
            ...ln,
            tasks:
              ln.tasks?.map((t: any) => ({
                ...t,
                dueDate: parseDate(t.dueDate as any),
              })) ?? [],
          })) ?? [],
      })) ?? [],
  }

  // Create default initial project as an examle.
  if (!state.projects.length) {
    state.projects.push({
      id: getRandomID(),
      title: 'First Project',
      lanes: [
        { id: getRandomID(), title: 'To Do', tasks: [] },
        { id: getRandomID(), title: 'Doing', tasks: [] },
        { id: getRandomID(), title: 'Done', tasks: [] },
      ],
    })
  }

  // Restore current project.
  state.currentProject =
    state.projects.find((p) => p.id === currentProjectId) ?? state.projects[0]

  return state
}
