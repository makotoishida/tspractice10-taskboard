import { TaskboardState } from './types'
import { formatDateForStorage, getRandomID, parseDate } from './utils'

const STORAGE_KEY = 'taskboard'

export async function save(state: TaskboardState) {
  const s = JSON.stringify(
    state.projects.map((p) => ({
      ...p,
      lanes: p.lanes.map((ln) => ({
        ...ln,
        tasks: ln.tasks.map((t) => ({
          ...t,
          dueDate: formatDateForStorage(t.dueDate),
        })),
      })),
    }))
  )
  window.localStorage.setItem(STORAGE_KEY, s)
}

export async function load(): Promise<TaskboardState> {
  const s = window.localStorage.getItem(STORAGE_KEY) ?? '{}'
  const tempState = JSON.parse(s) as TaskboardState
  const state = {
    ...tempState,
    projects: tempState.projects?.map((p) => ({
      ...p,
      lanes: p.lanes?.map((ln) => ({
        ...ln,
        tasks: ln.tasks?.map((t) => ({
          ...t,
          dueDate: parseDate(t.dueDate as any),
        })),
      })),
    })),
  }

  if (!state.projects) {
    state.projects = []
  }

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
  return state
}
