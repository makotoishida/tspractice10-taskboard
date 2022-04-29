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

export type TaskboardState = {
  projects: Project[]
  currentProject: Project
}
